import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Footer from './Footer';

describe('<Footer/>', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Should display two small headers over the social media and supporter's icons", () => {
    expect(
      screen.getByRole('heading', { name: 'Nossas redes:' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Apoio:' })).toBeInTheDocument();
  });

  it('Should display the social media buttons', () => {
    const facebook_logo = screen.getByAltText('Facebook Logo');
    const twitter_logo = screen.getByAltText('Twitter Logo');
    const instagram_logo = screen.getByAltText('Instagram Logo');
    expect(facebook_logo).toBeInTheDocument();
    expect(twitter_logo).toBeInTheDocument();
    expect(instagram_logo).toBeInTheDocument();
  });
  
  it("Should display the supporter's icons", () => {
    const tw_logo = screen.getByAltText('Thoughtworks Logo');
    expect(tw_logo).toBeInTheDocument();
  });
});
