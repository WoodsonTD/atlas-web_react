import React from 'react';
import './Footer.css';

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
