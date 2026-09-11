import { render, screen } from '@testing-library/react';
import Home from '../../app/(main)/page';

// Mock Next/image and Next/link to avoid errors in simple tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>,
}))


describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />);

    // Asom Bazar is present on the page in Hero Banner
    const heading = screen.getByText(/Discover mekhela chadors/i);
    expect(heading).toBeInTheDocument();
  });
});
