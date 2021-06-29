import React from "react";

const withChildFunctions = (fn) => (Wrapped) => (props) => {
  return <Wrapped {...props}>{fn}</Wrapped>;
};

export default withChildFunctions;


