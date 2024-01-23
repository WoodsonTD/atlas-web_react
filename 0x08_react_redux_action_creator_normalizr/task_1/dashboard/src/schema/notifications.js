// task_1/dashboard/src/schema/notifications.js
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

export { normalizedData };


// task_1/dashboard/src/schema/notificationsUtils.js
import data from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    return data
        .filter((notification) => notification.author.id === userId)
        .map(({ context }) => context);
};

export { getAllNotificationsByUser };
