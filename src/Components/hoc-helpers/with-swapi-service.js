import React from "react";
import { SwapiServiceConsumer } from "../Swapi-service-context/Swapi-service-context";
import ErrorBoundry from "../Error-Boundry";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService)
          return (
            <ErrorBoundry>
              <Wrapped {...props} {...serviceProps} />
            </ErrorBoundry>
          );
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
