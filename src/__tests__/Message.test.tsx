import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Add this line
import { toBeInTheDocument } from '@testing-library/jest-dom'; // Add this line

expect.extend({ toBeInTheDocument }); // Add this line

import Message from '../Message';

test('displays the correct message', () => {
  render(<Message text="Hello, World!" />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});

test('displays another message', () => {
  render(<Message text="Test Message" />);
  expect(screen.getByText('Test Message')).toBeInTheDocument();
});
