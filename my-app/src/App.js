import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {
  const [user, loading] = useAuthState(auth);


  return (
    <div className="app">

      <Router>
        {!user ? (
            <Login />
        ): (

        <>
        <Header/>
        <Sidebar />
        
        <Switch>
          <Route path="/" exact>
              <Chat />
          </Route>
        </Switch>

      </>

        )}
     
    </Router>
    </div>
  );
}

export default App;
