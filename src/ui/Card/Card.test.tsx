import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Container } from 'react-dom';
import Card from './Card';

describe('<Card></Card>', () => {
  it('Should display a div with the Card classname', () => {
    const container = render(<Card />).container;
    expect(container.querySelector('div')).toHaveClass('card');
  });

  it('Should render a Card children properly', () => {
    const container = render(
      <Card>
        <p>Test</p>
      </Card>
    ).container;
    expect(container.querySelector('p')).toHaveTextContent('Test');
  });
});
