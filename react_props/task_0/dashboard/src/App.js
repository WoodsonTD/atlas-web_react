import React from 'react';
import Notifications from './Notifications.js';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

