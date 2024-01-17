import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer }) => {
  const notifications = [
    { id: 1, type: 'default', html: { __html: 'Notification 1' }, value: 'Notification 1' },
    // Add more notifications as needed
  ];

  return (
    <div>
      <div className="menuItem">Your notifications</div>
      <div className={`Notifications${displayDrawer ? ' show' : ''}`}>
        <ul>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </ul>
      </div>
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
