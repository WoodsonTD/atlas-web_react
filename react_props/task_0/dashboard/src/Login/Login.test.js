import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders Login without crashing', () => {
  render(<Login />);
});

test('renders 2 input tags and 2 label tags', () => {
  const { container } = render(<Login />);
  const inputElements = container.querySelectorAll('input');
  const labelElements = container.querySelectorAll('label');
  expect(inputElements.length).toBe(2);
  expect(labelElements.length).toBe(2);
});
