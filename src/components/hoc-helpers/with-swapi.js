import React from 'react';
import {SwapiConsumer} from "../swapi-service-context/swapi-service-context";

const withSwapi = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <SwapiConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);
                        return <Wrapped {...props} 
                                        {...serviceProps}
                                />
                    } 
                }
            </SwapiConsumer>
        )
    }
}

export default withSwapi;