import React from "react";
import { StarshipList } from "../Sw-components";
import { withRouter } from "react-router-dom";

const StarshipPage = ({history}) => {
  return <StarshipList onItemSelected={(id) => history.push(id)} />;
};
// history.push - add a new element in browser history 
export default withRouter (StarshipPage);