import React, { Component } from "react";
import ErrorBoundry from "../Error-Boundry";
import Row from "../Row";
import {
    StarshipDetails,
    StarshipList,
} from "../Sw-components";

export default class StarshipPage extends Component {
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
        <Row left={<StarshipList  onItemSelected={this.onItemSelected}/>} right={<StarshipDetails itemId={this.state.selectedItem} />} />
      </ErrorBoundry>
    );
  }
}