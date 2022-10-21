import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testando heading da página', () => {
  test('Testa se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const PokemonText = screen.getByRole('heading', { level: 2 });
    expect(PokemonText).toHaveTextContent('Encountered pokémons');
  });
});

describe(' Testa botão', () => {
  test('verifica se ao renderizar a pagina o primeiro pokemon e o Pikachu e apos clicar no botão renderiza o charamader', () => {
    renderWithRouter(<App />);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    const nextBtn = screen.getByTestId('next-pokemon');
    userEvent.click(nextBtn);
    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
  });
  it('testa  se aparece apenas um pokemon por vez', () => {
    renderWithRouter(<App />);
    const pkmName = screen.getAllByTestId('pokemon-name');
    expect(pkmName.length).toEqual(1);
  });
});
describe('testa botões de filtragem', () => {
  it('testa se existe um botão de filtragem para cada tipo de pokémon, sem repetição;', () => {
    renderWithRouter(<App />);
    const pkmTypeBtns = screen.getAllByTestId('pokemon-type-button');
    expect(pkmTypeBtns.length).toEqual(7);
  });
  it('testa se existe um botão de filtragem para cada tipo de pokémon, sem repetição', () => {
    renderWithRouter(<App />);
    const typeElements = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    const pkmTypeBtns = screen.getAllByTestId('pokemon-type-button');
    pkmTypeBtns
      .forEach((btnsId, i) => {
        expect(btnsId)
          .toHaveTextContent(typeElements[i]);
      });
  });

  it('Testa se possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /All/i });
    userEvent.click(allBtn);
    expect(allBtn).toBeInTheDocument();
  });
});
