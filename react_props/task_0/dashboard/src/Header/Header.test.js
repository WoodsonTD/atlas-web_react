import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders Header without crashing', () => {
  render(<Header />);
});

test('renders img and h1 tags', () => {
  const { container } = render(<Header />);
  const imgElement = container.querySelector('img');
  const h1Element = container.querySelector('h1');
  expect(imgElement).toBeInTheDocument();
  expect(h1Element).toBeInTheDocument();
});
