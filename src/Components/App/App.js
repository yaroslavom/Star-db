import React, { Component } from "react";
import Header from "../Header/Header";
import RandomPlanet from "../Random-planet/";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import SwapiService from "../../Services/Swapi-service";
import DummySwapiService from "../../Services/Dummy-swapi-service";
import { SwapiServiceProvider } from "../Swapi-service-context/Swapi-service-context";
import "./App.css";
import { PeoplePage, PlanetPage, StarshipPage } from "../Pages";

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
  };

  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }

  onServiceChange = () =>
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("swithched to", Service.name);

      return {
        swapiService: new Service(),
      };
    });

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="stardb-app">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChange} />
          <RandomPlanet />
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </SwapiServiceProvider>
      </div>
    );
  }
}
