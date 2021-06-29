import React, { Component } from "react";
import ErrorBoundry from "../Error-Boundry";
import Row from "../Row";
import {
    PlanetDetails,
    PlanetList
} from "../Sw-components";

export default class PlanetPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    
    return (
      <ErrorBoundry>
        <Row left={<PlanetList onItemSelected={this.onItemSelected}/>} right={<PlanetDetails itemId={this.state.selectedItem}/>} />
      </ErrorBoundry>
    );
  }
}