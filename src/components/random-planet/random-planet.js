import React, { useCallback, useState, useEffect } from 'react';
import "./random-planet.css"
import Swapi from "../../swapi/swapi";
import RandomPlanetData from './randomPlanetData';
import Loader from '../loader/loader';
import ErrorComponent from '../error/error';
import PropTypes from "prop-types";

function RandomPlanet(props) {
    const service = new Swapi();
    const [randomPlanet, setRandomPlanet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const { updateInterval } = props;
    
    const getRandomPlanet = useCallback(async () => {
        try {
            setLoaded(false);
            const data = await service.getPlanet(Math.round(Math.random() * 10));
            setLoaded(true);
            setError(false); 
            setRandomPlanet(data);
        } catch(e) {
            setError(true);
            setLoaded(true);
        }
    }, [service]);

    useEffect(() => {
        let id = setInterval(getRandomPlanet, updateInterval);
        return () => {
            clearTimeout(id);
        }
    },[getRandomPlanet, updateInterval]);

    const errorPage = loaded && error ? <ErrorComponent/> : null ;
    const loader = !loaded && !error ? <Loader/> : null;
    const content = loaded && !error ? <RandomPlanetData data={randomPlanet}/> : null;

    return (
        <section>
            {errorPage}
            {loader}
            {content}
        </section>
    )
}

RandomPlanet.defaultProps = {
    updateInterval: 10000
}

RandomPlanet.propTypes = {
    updateInterval: PropTypes.number
}

export default RandomPlanet;