import React from "react";
import ItemDetails, { Record } from "../Item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
  return (
            <ItemDetails {...props}
            >
              <Record field="population" label="Population" />
              <Record field="rotation_period" label="Rotation Period" />
              <Record field="diameter" label="Diameter" />
            </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default withSwapiService (PlanetDetails, mapMethodsToProps);
