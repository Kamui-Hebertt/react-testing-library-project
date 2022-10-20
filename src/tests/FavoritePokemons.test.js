import React from 'react';
import { screen, render } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';

test('teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos;', () => {
  render(<FavoritePokemons />);
  const noFavoritesText = screen.getByText('No favorite pokemon found');
  expect(noFavoritesText).toBeInTheDocument();
});
