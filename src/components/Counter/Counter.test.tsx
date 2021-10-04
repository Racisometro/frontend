import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter />', () => {
  describe('Display numbers on screen', () => {
    it("Should display '000.000.000' if there's no amount to show", () => {
      let amount = 0;

      const container = render(<Counter amount={amount} />).container;
      // expect(screen.getByText('000.000.000')).toBeInTheDocument();
      expect(container.querySelector('#left-numbers')?.innerHTML).toEqual(
        '000'
      );
      expect(container.querySelector('#middle-numbers')?.innerHTML).toEqual(
        '000'
      );
      expect(container.querySelector('#right-numbers')?.innerHTML).toEqual(
        '000'
      );
    });
  });

  // describe('Display measure unit texts on screen', () => {
  //   it('Should display texts referring to millions, thousands and unities', () => {
  //     let amount = 0;

  //     const container = render(<Counter amount={amount} />).container;
  //     expect(screen.getByText('Milhões')).toBeInTheDocument();
  //     expect(screen.getByText('Milhares')).toBeInTheDocument();
  //     expect(screen.getByText('Unidades')).toBeInTheDocument();
  //   });
  // });
});
