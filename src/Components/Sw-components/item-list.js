import React from "react";
import ItemList from "../Item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunctions = (fn) => (Wrapped) => (props) => {
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

//patern partially applied functions: const add = (a) => (b) => a + b; ad(1)(2)

const PersonList = withSwapiService(mapPersonMethodsToProps)
  (withData(withChildFunctions(renderName)(ItemList))
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)
    (withData(withChildFunctions(renderName)(ItemList))
  );

const StarshipList = withSwapiService(mapStarshipMethodsToProps)
    (withData(withChildFunctions(renderName)(ItemList))
  );

export { PersonList, PlanetList, StarshipList };
