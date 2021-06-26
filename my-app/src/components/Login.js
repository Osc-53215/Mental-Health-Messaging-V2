import React from 'react';
import './Login.css';
import logo from './photos/mh-image.PNG'

function Login() {
    return (
        <div className = 'login'>
            
            <div className = 'login__inner'>
                <img src = {logo} alt = ''/>
            </div>
            
        </div>
    )
}

export default Login
