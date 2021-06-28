import React from "react";
import ItemList from "../Item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunctions = (Wrapped, fn) => (props) => {
  return <Wrapped {...props}>{fn}</Wrapped>;
};

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const PersonList = withSwapiService(
  withData(withChildFunctions(ItemList, renderName)),
  mapPersonMethodsToProps
);

const PlanetList = withSwapiService(
    withData(withChildFunctions(ItemList, renderName)),
    mapPlanetMethodsToProps
  );

const StarshipList = withSwapiService(
    withData(withChildFunctions(ItemList, renderName)),
    mapStarshipMethodsToProps
  );

export { PersonList, PlanetList, StarshipList };
