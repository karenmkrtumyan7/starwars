import React from 'react';
import './app.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import Swapi from "../../swapi/swapi";
import { SwapiProvider } from "../swapi-service-context/swapi-service-context";
import Routes from '../../routes/routes';

function App() {
  const service = new Swapi();                         
  return (
    <Router>
      <SwapiProvider value={service}>
        <div className="App">
          <Header />
          <RandomPlanet />
          <Routes/>
        </div>
      </SwapiProvider>
    </Router>
  );
}

export default App;
