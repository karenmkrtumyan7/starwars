import React from 'react';
import { PersonList } from '../jw-components/item-lists';
import Row from '../row/row';
import PersonDetails from "../jw-components/personDetails";
import { withRouter } from "react-router-dom";

const PeoplePage = ({match, history}) => {
    const id = match.params.id;
    
    return <Row left={<PersonList setId={(id) => history.push(id)}/>} 
                right={<PersonDetails id={id}/>}/>
}

export default withRouter(PeoplePage);

