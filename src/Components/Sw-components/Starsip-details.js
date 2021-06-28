import React from "react";
import ItemDetails, { Record } from "../Item-details";
import ErrorBoundry from "../Error-Boundry";
import { SwapiServiceConsumer } from "../Swapi-service-context/Swapi-service-context";

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

export default StarshipDetails;
