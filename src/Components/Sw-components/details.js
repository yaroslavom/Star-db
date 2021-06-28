import React from "react";
import ItemDetails, {Record} from "../Item-details";
import SwapiService from "../../Services/Swapi-service";
import ErrorBoundry from "../Error-Boundry";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipsImage,
} = swapiService;

const PersonDetails = ({ itemId }) => {
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
};

const PlanetDetails = ({ itemId }) => {
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
};

const StarshipDetails = ({ itemId }) => {
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
};

export { PersonDetails, PlanetDetails, StarshipDetails };
