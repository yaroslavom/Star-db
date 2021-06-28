import React from "react";
import ItemDetails, { Record } from "../Item-details";
import ErrorBoundry from "../Error-Boundry";
import { SwapiServiceConsumer } from "../Swapi-service-context/Swapi-service-context";

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({getPerson, getPersonImage}) => {
        return (
          <ErrorBoundry>
            <ItemDetails
              itemId={itemId}
              getData={getPerson}
              getImageUrl={getPersonImage}
            >
              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
          </ErrorBoundry>
        );
      }}
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({getPlanet, getPlanetImage}) => {
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

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({getStarship, getStarshipsImage}) => {
        return (
          <ErrorBoundry>
            <ItemDetails
              itemId={itemId}
              getData={getStarship}
              getImageUrl={getStarshipsImage}
            >
              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
              <Record field="cost_in_credits" label="Cost" />
            </ItemDetails>
          </ErrorBoundry>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
