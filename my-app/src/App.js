import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      <Router>
      <>
        <Header/>
        <Sidebar />
        
        <Switch>
          <Route path="/" exact>
            
          </Route>
        </Switch>

      </>
    </Router>
    </div>
  );
}

export default App;
