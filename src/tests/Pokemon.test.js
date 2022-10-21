import React from 'react';
import { screen } from '@testing-library/react';
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
});
