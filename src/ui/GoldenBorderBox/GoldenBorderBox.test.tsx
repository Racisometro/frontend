import { render } from '@testing-library/react';
import GoldenBorderBox from './GoldenBorderBox';

describe('<GoldenBorderBox></GoldenBorderBox>', () => {
  it('Should has a div with the golden-box className', () => {
    const container = render(<GoldenBorderBox />).container;

    expect(container.querySelector('div')).toHaveClass('golden-box');
  });

  it("Should render a GoldenBorderBox's child properly", () => {
    const container = render(
      <GoldenBorderBox>
        <p>Test</p>
      </GoldenBorderBox>
    ).container;
    expect(container.querySelector('p')).toHaveTextContent('Test');
  });
});
