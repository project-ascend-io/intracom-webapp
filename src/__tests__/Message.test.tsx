import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Message from '../Message';

test('displays the message', () => {
  const { getByText } = render(<Message text='Hello World' />);
  expect(getByText('Hello World')).toBeInTheDocument();
});
