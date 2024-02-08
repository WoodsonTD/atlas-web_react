import { normalize, schema } from 'normalizr';
import data from '../../notifications.json';

// Define the user entity
const user = new schema.Entity('users');

// Define the message entity
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define the notification entity
const notification = new schema.Entity(
    'notifications',
    {
        author: user,
        context: message,
    },
    { idAttribute: 'id' }
);

// Normalize the data
const normalizedData = normalize(data, [notification]);

// Utility function to get all notifications by user using the normalized dataset
const getAllNotificationsByUser = (userId) => {
    const { notifications } = normalizedData.entities;
    if (!notifications) return []; // Handle case where there are no notifications
    const userNotifications = normalizedData.result.filter(
        (notificationId) => notifications[notificationId]?.author?.id === userId
    );

    return userNotifications.map((notificationId) => notifications[notificationId].context);
};

export const { notifications, users, messages } = normalizedData.entities;
export { getAllNotificationsByUser };
