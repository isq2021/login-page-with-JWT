import { useState } from 'react';


//Place getToken before the state declaration, then initialize useState with getToken. This will fetch the token and set it as the initial state
export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());


  // saving the token to sessionStorage, save the token to state by calling setToken:
  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };


  //return an object that contains the token and saveToken set to the setToken property name. This will give the component the same interface. You can also return the values as an array, but an object will give users a chance to destructure only the values they want if you reuse this in another component.
  return {
    setToken: saveToken,
    token
  }
}


/* 

A custom Hook is a function that wraps custom logic. A custom Hook usually wraps one or more built-in React Hooks along with custom implementations. The primary advantage of a custom Hook is that you can remove the implementation logic from the component and you can reuse it across multiple components.
*/


/* 

Token saving into session storage

Inside of setToken, save the userToken argument to sessionStorage using the setItem method. This method takes a key as a first argument and a string as the second argument. That means you’ll need to convert the userToken from an object to a string using the JSON.stringify function. Call setItem with a key of token and the converted object.

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}


 retrieve the token to render the correct page. Inside the getToken function, call sessionStorage.getItem. This method takes a key as an argument and returns the string value. Convert the string to an object using JSON.parse, then return the value of token:


function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token}-------You need to use the optional chaining operator—?.—when accessing the token property because when you first access the application, the value of sessionStorage.getItem('token') will be undefined. If you try to access a property, you will generate an error. 
  



  The problem is your code never alerts React that the token retrieval was successful. You’ll still need to set some state that will trigger a re-render when the data changes. Like most problems in React, there are multiple ways to solve it. One of the most elegant and reusable is to create a custom Hook. so create useToken.js
  */