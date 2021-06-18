import React, { Component } from "react";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import ItemList from "../Item-list/Item-list";
import PersonDetails from "../Person-details/Person-details";


import "./People-page.css";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false,
  };

  componentDidCatch() {
      this.setState({hasError: true})
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    if (this.state.hasError) {
        return <ErrorIndicator/>
    }
    return (
        <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson}/>
        </div>
      </div>
    );
  }
}
