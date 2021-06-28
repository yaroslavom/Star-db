import React, { Component } from "react";
import ErrorIndicator from "../Error-indicator";
import ItemList from "../Item-list";
import ItemDetails from "../Item-details";
import Row from "../Row";
import SwapiService from "../../Services/Swapi-service";
import ErrorBoundry from "../Error-Boundry";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../Sw-components";

import "./People-page.css";
import { Record } from "../Item-details/Item-details";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 5,
  };

  swapiService = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    // return <Row left={itemList} right={itemList} />; //property pattern
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Row
            left={<PersonList>{({ name }) => <span>{name}</span>}</PersonList>}
            right={<PersonDetails itemId={12} />}
          />
          <Row
            left={<PlanetList>
              { ({name}) => <span>{name}</span> }
            </PlanetList> }
            right={<PlanetDetails itemId={12}/>}
          />
          <Row
            left={<StarshipList>
              { ({name}) => <span>{name}</span> }
            </StarshipList> }
            right={<StarshipDetails itemId={12}/>}
          />

        </div>
      </ErrorBoundry>
    );
  }
}
