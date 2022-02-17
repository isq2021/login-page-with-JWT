import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';//3.imported from react router dom
// 2.you need to import the components and create routes 
import Dashboard from './components/Dashboard/dahsboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/preferences';
import useToken from './components/App/useToken';




function App() {
    const { token, setToken } = useToken();//4.store the token in memory using .

    if(!token) {
        return <Login setToken={setToken} />
      }// 5.display Login if the token is falsy.
    return ( 
      
      //4. create  template for the application.
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

