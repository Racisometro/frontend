import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Footer from './Footer';

describe('<Footer/>', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('Should display the social media buttons', () => {
    const facebook_logo = screen.getByAltText('Facebook Logo');
    expect(facebook_logo).toBeInTheDocument();
  });
});
