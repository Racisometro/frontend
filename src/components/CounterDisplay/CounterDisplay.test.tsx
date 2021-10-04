import { render, screen } from '@testing-library/react';
import CounterDisplay from './CounterDisplay';

describe('<CounterDisplay/>', () => {
  beforeEach(() => {
    render(<CounterDisplay />);
  });

  it('should render the Counter component', () => {
    expect(screen.getByTestId('counter-component')).toBeTruthy();
  });
});
