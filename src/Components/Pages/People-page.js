import React, { Component } from "react";
import ErrorBoundry from "../Error-Boundry";
import Row from "../Row";
import {
  PersonDetails,
  PersonList
} from "../Sw-components";

export default class PeoplePage extends Component {
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
        <Row left={<PersonList onItemSelected={this.onItemSelected}/>} right={<PersonDetails itemId={this.state.selectedItem} />} />
      </ErrorBoundry>
    );
  }
}