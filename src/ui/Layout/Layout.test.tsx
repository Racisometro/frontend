import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  beforeEach(() => {
    render(<Layout />);
  });

  it('Should display the Header with the logo img', () => {
    expect(document.querySelector('img')).toBeInTheDocument();
  });
});
