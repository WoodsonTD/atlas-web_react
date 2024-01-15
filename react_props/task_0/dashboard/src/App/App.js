import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Login from "../Login/Login";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications";


function App() {
  return (
    <>
    <Notifications />
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
    </>
  );
}

export default App;
