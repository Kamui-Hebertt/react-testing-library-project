import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testa e se é renderizado um card com as informações de determinado pokémon:', () => {
  test('testa se nome, element, peso e imagem com alt possui os respectivos atributos', () => {
    renderWithRouter(<App />);
    const pkmName = screen.getByTestId('pokemon-name');
    const pkmType = screen.getByTestId('pokemon-type');
    const pkmWeight = screen.getByTestId('pokemon-weight');
    expect(pkmName).toHaveTextContent(/Pikachu/i);
    expect(pkmType).toHaveTextContent(/Electric/i);
    expect(pkmWeight).toHaveTextContent(/Average weight: 6.0 kg/i);
    const pkmImage = screen.getByRole('img');
    expect(pkmImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pkmImage).toHaveAttribute('alt', 'Pikachu sprite');
  });

  it('Testa e verifica se ao clicar em more details existe a propriedade com o id do pokemon', () => {
    const { history } = renderWithRouter(<App />);
    const hrefLink = screen.getByRole('link', { name: 'More details' });
    userEvent.click(hrefLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');
  });
  it('testando se ao clicar em favoritos aparece a imagem de favorito com o respctivo pokemon', () => {
    renderWithRouter(<App />);
    const hrefLink = screen.getByRole('link', { name: 'More details' });
    userEvent.click(hrefLink);
    const favoriteCheckBox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(favoriteCheckBox);

    const imageFavo = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
    // const altImage = screen.getByRole('src', '/star-icon.svg');
    expect(imageFavo).toHaveAttribute('src', '/star-icon.svg');
  });
});
