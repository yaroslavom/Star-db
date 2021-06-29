import React from "react";
import ItemList from "../Item-list";
import {
  withData,
  withSwapiService,
  withChildFunctions,
  compose,
} from "../hoc-helpers";

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const renderName = ({ name }) => <span>{name}</span>;

//patern partially applied functions(from down to up): const add = (a) => (b) => a + b; ad(1)(2)

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunctions(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunctions(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunctions(renderName)
)(ItemList);
export { PersonList, PlanetList, StarshipList };
