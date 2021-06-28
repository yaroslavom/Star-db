import React, { Component } from "react";

import Header from "../Header/Header";
import RandomPlanet from "../Random-planet/";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import "./App.css";
import PeoplePage from "../People-page";
// import {  PersonDetails, PlanetDetails, StarshipDetails, PersonList, PlanetList, StarshipList } from "../Sw-components";


export default class App extends Component {

  state = {
    hasError: false,
  }

  componentDidCatch() {
  console.log("componentDidCatch");
  this.setState({hasError: true})
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage/>
        {/* <PersonList/>
        <PlanetList/> */}
      </div>
    );
  }
}
