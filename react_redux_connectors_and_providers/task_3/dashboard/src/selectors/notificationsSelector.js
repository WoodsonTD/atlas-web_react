// Selector for getting the filter type selected
export const filterTypeSelected = state => state.filter;

// Selector for getting the notifications
export const getNotifications = state => state.notifications;

// Selector for getting the unread notifications
export const getUnreadNotifications = state => {
    return state.notifications.filter(notification => !notification.isRead);
};
