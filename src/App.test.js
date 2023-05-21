import { render, screen } from '@testing-library/react';
import App from './App';

test('ensure the page is rendering', () => {
  render(<App />);

  const text = screen.getByText("Luciano Ciccariello")

  expect(text).toBeInTheDocument();
});
