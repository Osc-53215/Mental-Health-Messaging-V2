import React from 'react';
import './Login.css';
import logo from './photos/mh-image.PNG'

function Login() {
    return (
        <div className = 'login'>

            <div className = 'login__inner'>
                <img src = {logo} alt = ''/>

                <h1>Sign in to the Uni-Health</h1>
                <p>UniHealth.com</p>

                <Button type = 'submit' onClick = {singin}>
                    Sing in with Google
                </Button>

            </div>

            
            
        </div>
    )
}

export default Login
