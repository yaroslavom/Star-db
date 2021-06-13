export default class SwapiService {
  _apiBase = "https://swapi.dev/api/";

  async getResource(url) {
    const result = await fetch(`${this._apiBase}${url}`); //result - ти чекаєш на відповідь, тоді присвоюєш

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${result.status}`);
    } //Якщо result не ок, то відобразити новий лог

    return await result.json(); //ти чекаєш на отримання даних з відповіді і повертаєш їх
  }

  async getAllPeople() {
    const result = await this.getResource(`people/`);
    return result.results.map(this._transformPerson);
  }

  async gerPerson(id) {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const result = await this.getResource(`planets/`);
    return result.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const result = await this.getResource(`starships/`);
    return result.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`starships/${id}/`);
    return this._transformStarship(starship)
  }

  _extractId(item) {
    const isRegExp = /\/([0-9]*)\/$/; //https://regex101.com
    return item.url.match(isRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    };
  }
}
