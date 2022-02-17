import React, { useState } from 'react';
import PropTypes from 'prop-types';//13.Add in the PropType from the new prop 

import './Login.css';

//17.create a function to make a POST request to the server
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


/*14. destructure the props object to pull out the setToken prop. */
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  //18.create a form submit handler called handleSubmit that will call loginUser with the username and password. Call setToken with a successful result. Call handleSubmit using the onSubmit event handler on the <form>
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }



  //15.create a local state target.value to capture the Username and Password
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


//16. pull out the setToken prop
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};