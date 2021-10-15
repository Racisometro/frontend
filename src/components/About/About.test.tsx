import { render, screen } from '@testing-library/react';
import About from './About';

describe('<About/>', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('Should display the block title', () => {
    const title = 'O projeto Racismômetro';
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('Should display the paragraph', () => {
    expect(document.querySelectorAll('p')).toHaveLength(2)
  });
});
