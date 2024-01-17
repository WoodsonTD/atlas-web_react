import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'urgent', html: { __html: 'Notification 1' }, value: 'Notification 1' },
    // Add more notifications as needed
  ];

  return (
    <div>
      <div className="menuItem">Your notifications</div>
      <div className="Notifications">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
