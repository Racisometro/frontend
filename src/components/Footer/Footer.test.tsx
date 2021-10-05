import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Footer from './Footer';

describe('<Footer/>', () => {

  let facebook_logo: HTMLElement;
  let twitter_logo: HTMLElement;
  let instagram_logo: HTMLElement;

  beforeEach(() => {
    render(<Footer />);
    facebook_logo = screen.getByAltText('Facebook Logo');
    twitter_logo = screen.getByAltText('Twitter Logo');
    instagram_logo = screen.getByAltText('Instagram Logo');
  });

  it("Should display two small headers over the social media and supporter's icons", () => {
    expect(
      screen.getByRole('heading', { name: 'Nossas redes:' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Apoio:' })).toBeInTheDocument();
  });

  it('Should display the social media buttons', () => {
    expect(facebook_logo).toBeInTheDocument();
    expect(twitter_logo).toBeInTheDocument();
    expect(instagram_logo).toBeInTheDocument();
  });

  it("Should redirect to the project' social media profiles", () => {
    expect(twitter_logo.closest('a')).toHaveAttribute('href', 'https://twitter.com/racismometro');
    expect(instagram_logo.closest('a')).toHaveAttribute('href', 'https://www.instagram.com/racismometro');
  });
  
  it("Should display the supporter's icons", () => {
    const tw_logo = screen.getByAltText('Thoughtworks Logo');
    expect(tw_logo).toBeInTheDocument();
  });
});
