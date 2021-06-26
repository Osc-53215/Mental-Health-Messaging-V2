import React from 'react';
import './Login.css';
import logo from './photos/mh-image.PNG';
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase';

function Login() {
    
    const singIn = (e) => {
        e.preventDefault();

        auth.signInWithPopup(provider).catch((error) => alert(error.message));
        
    }

    return (
        <div className = 'login'>

            <div className = 'login__inner'>
                <img src = {logo} alt = ''/>

                <h1>Sign in to Uni-Health</h1>
                <p>UniHealth.com</p>

                <Button onClick = {singIn}>
                    Sign in with Google
                </Button>

            </div>

            
            
        </div>
    )
}

export default Login
