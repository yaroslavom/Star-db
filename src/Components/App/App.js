import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import RandomPlanet from "../Random-planet/";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import SwapiService from "../../Services/Swapi-service";
import DummySwapiService from "../../Services/Dummy-swapi-service";
import { SwapiServiceProvider } from "../Swapi-service-context/Swapi-service-context";
import "./App.css";
import { PeoplePage, PlanetPage, StarshipPage, MeetPage, LoginPage } from "../Pages";
import { StarshipDetails } from "../Sw-components";

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false
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

    onLogin=()=> {
      this.setState({isLoggedIn: true})
    }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const {isLoggedIn} = this.state

    return (
      <div className="stardb-app">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Route path="/" render={() => <h2 className="text-center">Welcome to Star DB</h2>} exact />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} /> 
            {/* ↑ Пример как работает код без переключения реакт роутера (данный код не хранит в себе выбранный id при обновлении страницы )*/}
            <Route path="/starships" exact component={StarshipPage} />
            <Route
              path="/starships/:id"
              render={({ match }) => (
                <StarshipDetails itemId={match.params.id} />
              )}
            />
            <Route path="/meet" render={()=><MeetPage isLoggedIn={isLoggedIn}/>}/>
            <Route path="/login" component={()=><LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>}/>
          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}
