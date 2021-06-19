import React, { Component } from "react";
import ErrorIndicator from "../Error-indicator";
import ItemList from "../Item-list";
import PersonDetails from "../Person-details";
import Row from "../Row";

import "./People-page.css";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
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

    const itemList = (
      <ErrorBoundry>
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.props.getData}
        renderItems={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        } //render pattern
      />
      </ErrorBoundry>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry> //children pattern  
    );

    return <Row left={itemList} right={personDetails} />; //property pattern
  }
}
