import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ listNotifications }) => {
  return (
    <div className="Notifications">
      <div className="menuItem">Your notifications</div>
      {listNotifications.length === 0 ? (
        <NotificationItem type="default" value="No new notification for now" />
      ) : (
        listNotifications.map((notification) => (
          <NotificationItem key={notification.id} {...notification} />
        ))
      )}
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
