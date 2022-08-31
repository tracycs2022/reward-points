import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

test.afterEach(cleanup);

test('renders h1',() => {
  render(<App />);
  const h1Element = screen.getByText(/Transactions in the past three months/i);
  expect(h1Element).toBeInTheDocument();
})
