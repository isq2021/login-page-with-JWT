import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/dahsboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/preferences';
import useToken from './components/App/useToken';




function App() {
    const { token, setToken } = useToken();
    
    if(!token) {
        return <Login setToken={setToken} />
      }
    return ( 
        <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
}

export default App;