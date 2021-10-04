import { render, screen } from '@testing-library/react';
import { Container } from 'react-dom';
import TimeFilter from './TimeFilter';

describe('<TimeFilter />', () => {
  let container: Container;
  const firstFilter = '08/09/20';
  const secondFilter = '08/09/21';
  beforeEach(() => {
    container = render(
      <TimeFilter firstFilter={firstFilter} secondFilter={secondFilter} />
    ).container;
  });

  it('Should display a title of the time interval filter', () => {
    const expectedText = 'Menções de racismo entre:';

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('Should display the dates of the current period', () => {
    const firstFilterText = '08/09/20';
    const secondFilterText = '08/09/21';
    const conjunctionText = 'e';
    expect(screen.getByText(firstFilterText)).toBeInTheDocument();
    expect(screen.getByText(secondFilterText)).toBeInTheDocument();
    expect(screen.getByText(conjunctionText)).toBeInTheDocument();
  });
});
