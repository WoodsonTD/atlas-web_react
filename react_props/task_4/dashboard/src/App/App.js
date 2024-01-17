import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";

function App() {
  return (
    <>
      {/* Notifications component */}
      <Notifications />

      {/* Main App container */}
      <div className="App">
        {/* Header component */}
        <Header />

        {/* Login component */}
        <Login />

        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
}

export default App;
