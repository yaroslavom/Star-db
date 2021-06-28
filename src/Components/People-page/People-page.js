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
import { SwapiServiceProvider } from "../Swapi-service-context/Swapi-service-context";

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
  
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Row
              left={
                <PersonList/>
              }
              right={<PersonDetails itemId={12} />}
            />
            <Row
              left={
                <PlanetList/>
              }
              right={<PlanetDetails itemId={12} />}
            />
            <Row
              left={
                <StarshipList/>
              }
              right={<StarshipDetails itemId={12} />}
            />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
