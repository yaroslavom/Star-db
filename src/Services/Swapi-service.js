export default class SwapiService {
  _apiBase = "https://swapi.dev/api/";
  _apiImage = "https://starwars-visualguide.com/assets/img/"

  getResource = async (url) => {
    const result = await fetch(`${this._apiBase}${url}`); //result - ти чекаєш на відповідь, тоді присвоюєш

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${result.status}`);
    } //Якщо result не ок, то відобразити новий лог

    return await result.json(); //ти чекаєш на отримання даних з відповіді і повертаєш їх
  }

  getAllPeople = async () => {
    const result = await this.getResource(`people/`);
    return result.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPerson(person);
  }

  getPersonImage = ({id}) => {
    return `${this._apiImage}characters/${id}.jpg`
  }

  getAllPlanets = async () => {
    const result = await this.getResource(`planets/`);
    return result.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getPlanetImage = ({id}) => {
    return `${this._apiImage}planets/${id}.jpg`
  }

  getAllStarships = async () => {
    const result = await this.getResource(`starships/`);
    return result.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`starships/${id}/`);
    return this._transformStarship(starship)
  }

  getStarshipsImage = ({id}) => {
    return `${this._apiImage}starships/${id}.jpg`
  }

  _extractId = (item) => {
    const isRegExp = /\/([0-9]*)\/$/; //https://regex101.com
    return item.url.match(isRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      cost_in_credits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargo_capacity: starship.cargo_capacity,
    };
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  }
}
