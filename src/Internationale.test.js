import { render, screen } from '@testing-library/react';
import Internationale from './Internationale';

test('renders learn react link', () => {
  render(<Internationale />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
