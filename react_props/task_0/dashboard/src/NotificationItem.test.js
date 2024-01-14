import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('renders NotificationItem component', () => {
  const { getByText } = render(<NotificationItem type="default" html={{ __html: 'Test' }} value="Test Value" />);
  const listItem = getByText('Test Value');
  expect(listItem).toBeInTheDocument();
});
