import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer without crashing', () => {
  render(<Footer />);
});

test('renders Copyright text', () => {
  const { getByText } = render(<Footer />);
  const copyrightText = getByText('Copyright');
  expect(copyrightText).toBeInTheDocument();
});
