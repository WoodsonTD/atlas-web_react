import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

const App = () => {
  // Create the listCourses array
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

   // Create the listNotifications array
   const listNotifications = [
    { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'Value 1' },
    // Add more notifications as needed
  ];

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <CourseList listCourses={listCourses} /> {/* Pass the listCourses array */}
        <Footer />
      </div>
    </>
  );
};

export default App;
