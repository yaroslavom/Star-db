import React from "react";
import { Redirect } from "react-router-dom";

const MeetPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h4>Hello, my name is Yaroslav</h4>
        <p>Go to my <a href="https://github.com/yaroslavom?tab=repositories">GitHub</a> to see more</p>
      </div>
    );
  }

  return <Redirect to="/login"/>;
}; 

export default MeetPage;
