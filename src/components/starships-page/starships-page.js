import React from 'react';
import { StarshipList } from '../jw-components/item-lists';
import Row from '../row/row';
import StarshipDetails from "../jw-components/starshipDetails";
import { withRouter } from "react-router-dom";


const StarshipPage = ({match, history}) => {
    const id = match.params.id;
    
    return <Row left={<StarshipList setId={(id) => history.push(id)}/>} 
                right={<StarshipDetails id={id}/>}/>
}

export default withRouter(StarshipPage);