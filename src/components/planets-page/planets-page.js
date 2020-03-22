import React from 'react';
import { PlanetList } from '../jw-components/item-lists';
import Row from '../row/row';
import PlanetDetails from "../jw-components/planetDetails";
import { withRouter } from "react-router-dom";

const PlanetsPage = ({match, history}) => {
    const id = match.params.id;

    return <Row left={<PlanetList setId={(id) => history.push(id)}/>} 
                right={<PlanetDetails id={id}/>}/>
}

export default withRouter(PlanetsPage);