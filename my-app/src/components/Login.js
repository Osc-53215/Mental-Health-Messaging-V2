import React from 'react';
import './Login.css';
import logo from './photos/mh-image.PNG';
import { Button } from '@material-ui/core'

function Login() {
    
    const singIn = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className = 'login'>

            <div className = 'login__inner'>
                <img src = {logo} alt = ''/>

                <h1>Sign in to Uni-Health</h1>
                <p>UniHealth.com</p>

                <Button type = 'submit' onClick = {singIn}>
                    Sign in with Google
                </Button>

            </div>

            
            
        </div>
    )
}

export default Login
