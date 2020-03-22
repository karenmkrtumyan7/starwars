import React from 'react';
import ItemList from '../item-list/item-list';
import withData from '../hoc-helpers/with-data';
import withSwapi from '../hoc-helpers/with-swapi';
import { compose } from './compose';


const withChild = (renderItem) => (View) => {
    return (props) => {
        return (<View {...props} renderItem={renderItem}/>);
    }
}

const mapPersonsToProps  = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetsToProps  = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipsToProps  = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = compose(withSwapi(mapPersonsToProps), withData, withChild(el => el.name))(ItemList);
const PlanetList = compose(withSwapi(mapPlanetsToProps), withData, withChild(el => el.name))(ItemList);
const StarshipList = compose(withSwapi(mapStarshipsToProps), withData, withChild(el => el.name))(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}