import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import Notifications from './Notifications';
import './Notifications.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <div id="root-notifications">
        <Notifications />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
