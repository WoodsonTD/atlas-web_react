import React from 'react';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from './utils';
import './Notifications.css';

const Notifications = ({ listNotifications, displayDrawer }) => {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className={`Notifications ${displayDrawer ? 'active' : ''}`}>
      <button
      className="menu-item"
        style={{
          float: 'right',
          marginLeft: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src="/close-icon.png" alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {/* Replace li tags with NotificationItem components */}
        {listNotifications && listNotifications.length === 0 ? (
          <li>No new notification for now</li>
        ) : (
          listNotifications &&
          listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              html={notification.html}
              value={notification.value}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Notifications;
