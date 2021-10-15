import { render, screen } from '@testing-library/react';
import CounterDisplay from './CounterDisplay';

describe('<CounterDisplay/>', () => {
  beforeEach(() => {
    render(<CounterDisplay />);
  });

  it('should render the Counter component', () => {
    expect(screen.getByTestId('counter-component')).toBeTruthy();
  });

  it('should render the Filters component', () => {
    expect(screen.getByTestId('filters-component')).toBeTruthy();
  });

  it('should render the GoldenBorderBox component', () => {
    expect(screen.getByTestId('golden-border-box-component')).toBeTruthy();
  });
});
