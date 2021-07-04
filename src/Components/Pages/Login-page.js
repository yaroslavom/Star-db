import React from "react";
import {Redirect } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if(isLoggedIn) {
    return  <Redirect to="/meet"/>
  }
    
  return (
    <div className="jumbotron text-center">
      <p>Click on this button to meet with me</p>
      <button className="btn btn-primary" onClick={onLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
