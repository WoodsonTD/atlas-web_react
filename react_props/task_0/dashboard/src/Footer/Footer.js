import React from 'react';
import './Footer.css';

const getFooterCopy = (isTrue) => {
    return isTrue ? 'Your footer copy when true' : 'Your footer copy when false';
  };
  
  const getFullYear = () => {
    return new Date().getFullYear();
  };
  
  const Footer = () => {
    return (
      <div className="footer">
        <footer className="App-footer">
          <p>{getFooterCopy(true)} - {getFullYear()}</p>
        </footer>
      </div>
    );
  };
  
  export default Footer;
