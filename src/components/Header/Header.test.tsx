import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Header from './Header';

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Should display the project logo', () => {
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'Racismômetro');
  });
});
