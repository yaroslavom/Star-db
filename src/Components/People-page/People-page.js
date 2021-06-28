import React, { Component } from "react";
import ErrorIndicator from "../Error-indicator";
import Row from "../Row";
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

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 5,
  };

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
      </ErrorBoundry>
    );
  }
}
