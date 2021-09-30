import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import App from './App';

describe('<App/>', () => {
  it("should display the Home component when routing to '/'", () => {
    const container = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    ).container;

    expect(screen.getByTestId('home-component')).toBeTruthy();
  });
});
