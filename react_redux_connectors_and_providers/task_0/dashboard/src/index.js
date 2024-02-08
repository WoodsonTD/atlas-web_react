import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uiReducer from './reducers/uiReducer'; // Assuming this is the correct path to your uiReducer

import App from './App/App';

// Create the Redux store
const store = createStore(uiReducer);

// Render the App component wrapped with the Provider
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
