import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import logo from './components/photos/mh-image.PNG';
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth);
  

  if (true) {
    return (
      <div className = 'apploading'>
        <div className = 'apploading__contents'>
          <img src = {logo} alt = ''/>
          <Spinner 
            name = 'ball-clip-rotate-multiple'
            color = 'black'
            fadeIn = 'none'
          />
        </div>

      </div>
    )
  }


  return (
    <div>

      <Router>
        {!user ? (
            <Login />
        ): (

        <>
        <div className="app">
        <Header/>
        <Sidebar />
        
        <Switch>
          <Route path="/" exact>
              <Chat />
          </Route>
        </Switch>
        </div>
      </>

        )}
     
    </Router>
    </div>
  );
}

export default App;
