import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

test('testando se ao inserir um caminho incorreto é direcionado para a página notfound e se possui uma imagem', () => {
  render(<NotFound />);
  const titleMessage = screen.getByRole('heading', { level: 2 });
  expect(titleMessage).toHaveTextContent('Page requested not found');
  const NotFoundImg = screen.getByRole('img');
  expect(NotFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
