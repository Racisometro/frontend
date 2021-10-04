import { render, screen } from '@testing-library/react';
import Filters from './Filters';

describe('<Filters/>', () => {
  const firstFilter = '08/09/20';
  const secondFilter = '08/09/21';

  beforeEach(() => {
    render(<Filters firstFilter={firstFilter} secondFilter={secondFilter} />);
  });

  it('Should render the TimeFilter component', () => {
    expect(screen.getByTestId('time-filter-component')).toBeTruthy();
  });
});
