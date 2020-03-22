import React from 'react';
import { Route } from 'react-router-dom';
import PeoplePage from '../components/people-page/people-page';
import  PlanetsPage  from '../components/planets-page/planets-page';
import StarshipPage from '../components/starships-page/starships-page';
import Welcome from '../components/welcome/welcome';

function Routes() {
    return(
        <>
            <Route exact path="/" > 
                <Welcome />
            </Route>
            <Route path="/people/:id?">
                <PeoplePage/>
            </Route>
            <Route path="/planets/:id?">
                <PlanetsPage/>
            </Route>
            <Route path="/starships/:id?">
                <StarshipPage/>
            </Route>

        </>
    )
}

export default Routes;