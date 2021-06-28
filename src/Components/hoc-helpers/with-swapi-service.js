import React from "react";
import { SwapiServiceConsumer } from "../Swapi-service-context/Swapi-service-context";
import ErrorBoundry from "../Error-Boundry";

const withSwapiService = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          return (
            <ErrorBoundry>
              <Wrapped {...props} swapiService={swapiService} />
            </ErrorBoundry>
          );
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
