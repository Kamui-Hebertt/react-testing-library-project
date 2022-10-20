import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testando rotas', () => {
  it('testado se o texto Home existe no link home', () => {
    renderWithRouter(<App />);
    const LinkHome = screen.getByRole('link', { name: /home/i });
    expect(LinkHome).toBeInTheDocument();
  });

  it('testando se o segundo link possui o texto about', () => {
    renderWithRouter(<App />);
    const LinkAbout = screen.getByRole('link', { name: /about/i });
    expect(LinkAbout).toBeInTheDocument();
  });
  it('testando se o terceiro link contém o text Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const LinkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(LinkFavorite).toBeInTheDocument();
  });

  it('testa se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;', () => {
    const { history } = renderWithRouter(<App />);
    const LinkHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(LinkHome);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
  });

  it('testando se ao clicar em about é redirecionado para a página about', () => {
    const { history } = renderWithRouter(<App />);

    const LinkAbout = screen.getByRole('link', { name: /About/i });
    userEvent.click(LinkAbout);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });
  it('testando se ao clicar em Favorite Pokémons é redirecionado para a página favorite', () => {
    const { history } = renderWithRouter(<App />);
    const LinkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(LinkFavorite);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });
});
