import React from "react";
import ItemList from "../Item-list";
import SwapiService from "../../Services/Swapi-service";
import { withData } from "../hoc-helpers";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunctions = (Wrapped, fn) => (props) => {
    return (
        <Wrapped {...props}>
            {fn}
        </Wrapped>
    )
}

const renderName = ({name}) => <span>{name}</span>

const PersonList = withData(withChildFunctions(ItemList, renderName), getAllPeople);

const PlanetList = withData(withChildFunctions(ItemList, renderName), getAllPlanets);

const StarshipList = withData(withChildFunctions(ItemList, renderName), getAllStarships);

export { PersonList, PlanetList, StarshipList };
