import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders the counter starting at 0', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
  });

  test('increments the count when the button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    await user.click(button);

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });
});