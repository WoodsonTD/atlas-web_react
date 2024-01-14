// Login.js
import React from 'react';
import './Login.css';

const Login = () => {
    return (
    <React.Fragment>
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" />
            </div>
            
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
            </div>
            
            <button>OK</button>
        </div>
    </React.Fragment>
    );
};

export default Login;
