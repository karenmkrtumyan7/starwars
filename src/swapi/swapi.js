class Swapi  {
    constructor() {
        this.baseLink = "https://swapi.co/api";
        this.baseImageLink = "https://starwars-visualguide.com/assets/img";
    }

    async getRequest(link) {
        const res = await fetch(link);

        if (!res.ok) {
            throw new Error(`Couldn\`t fetch ${this.baseLink}`);
        }

        const data = await res.json();
        return data;
    }

    getAllPeople = async () => {
       const data = await this.getRequest(`${this.baseLink}/people/`);
       return data.results;
    }

    getAllPlanets = async () => {
        const data = await this.getRequest(`${this.baseLink}/planets/`);
        return data.results;
    }

    getAllStarships = async () => {
        const data = await this.getRequest(`${this.baseLink}/starships/`);
        return data.results;
    }

    getPerson = async (id) => {
        const data = await this.getRequest(`${this.baseLink}/people/${id}/`);
        return {
            name: data.name,
            birthYear: data.birth_year, 
            gender: data.gender, 
            eyeColor: data.eye_color,
        }
    }

    getPlanet = async (id) => {
        const data = await this.getRequest(`${this.baseLink}/planets/${id}/`);
        
        return {
            url: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
            name: data.name,
            rotationPeriod: data.rotation_period,
            population: data.population,
            diameter: data.diameter
        }
    }

    getStarship = async (id) => {
        const data = await this.getRequest(`${this.baseLink}/starships/${id}/`);

        return  {
            name: data.name,
            model: data.model,
            length: data.length,
            costInCredits: data.cost_in_credits
        }
    }

    getPersonImage = (id) => {
        return `${this.baseImageLink}/characters/${id}.jpg`
    }

    getStarshipImage = (id) => {
        return `${this.baseImageLink}/starships/${id}.jpg`
    }

    getPlanetImage = (id) => {
        return `${this.baseImageLink}/planets/${id}.jpg`
    }
}

export default Swapi;