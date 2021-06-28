import React from "react";
import ItemDetails, { Record } from "../Item-details";
import ErrorBoundry from "../Error-Boundry";
import { SwapiServiceConsumer } from "../Swapi-service-context/Swapi-service-context";

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet, getPlanetImage }) => {
        return (
          <ErrorBoundry>
            <ItemDetails
              itemId={itemId}
              getData={getPlanet}
              getImageUrl={getPlanetImage}
            >
              <Record field="population" label="Population" />
              <Record field="rotation_period" label="Rotation Period" />
              <Record field="diameter" label="Diameter" />
            </ItemDetails>
          </ErrorBoundry>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export default PlanetDetails;
