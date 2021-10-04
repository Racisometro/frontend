import { render, screen } from '@testing-library/react';
import Filters from './Filters';

describe('<Filters/>', () => {
  beforeEach(() => {
    render(<Filters />);
  });

  it('Should render the TimeFilter component', () => {
    expect(screen.getByTestId('time-filter-component')).toBeTruthy();
  });
});
