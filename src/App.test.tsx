import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  beforeEach(() => render(<App />));
  
  it('Should display the project logo', () => {
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'Racismômetro');
  });
});
