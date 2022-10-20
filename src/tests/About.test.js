// será avaliado se o arquivo teste About.test.js contempla 100% dos casos
// de uso criados pelo Stryker:
// É exibido na tela um h2 com texto About Pokédex
// O atributo src da imagem é
import { screen, render } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';
// import renderWithRouter from '../renderWithRouter';

test('verifica se é exibido na tela um h2 com texto About Pokédex O atributo src da imagem é', () => {
  render(<About />);
  const textTitle = screen.getByText('About Pokédex');
  const pokedex = screen.getByRole('img');
  expect(textTitle).toBeInTheDocument();
  expect(pokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
