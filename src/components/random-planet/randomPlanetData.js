import React from 'react';

function RandomPlanetData(props) {
    const { url, name, population, rotationPeriod, diameter } = props.data;
    return (
        <>
            <div className="image-wrapper">
                <img src={url} alt="Planet"/>
            </div>
            <div className="info-wrapper">
                <h1>Planet {name}</h1>
                <ul>
                    <li>Population {population}</li>
                    <li>Rotation Period {rotationPeriod}</li>
                    <li>Diameter 100 {diameter}</li>
                </ul>
            </div>
        </>
    )
}

export default RandomPlanetData;