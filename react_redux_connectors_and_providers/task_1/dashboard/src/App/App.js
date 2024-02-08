import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux'; // Import connect from Redux
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { AppContext, AppProvider } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators'; // Import action creators

const styles = StyleSheet.create({
  body: {},
  app: {
    textAlign: 'center',
    paddingTop: '4rem',
  },
});

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.get('isUserLoggedIn'),
  displayDrawer: state.uiReducer.get('isNotificationDrawerVisible'),
});

// Connect action creators to the component
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

const App = ({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) => {
  return (
    <AppProvider>
      <>
        <Notifications displayDrawer={displayDrawer} /> {/* Pass displayDrawer as prop */}
        <div className={css(styles.app, styles.body)}>
          <Header />
          <BodySectionWithMarginBottom title="Course list">
            <CourseList />
          </BodySectionWithMarginBottom>
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>Some random text for the news...</p>
          </BodySection>
          <Footer />
        </div>
      </>
    </AppProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
