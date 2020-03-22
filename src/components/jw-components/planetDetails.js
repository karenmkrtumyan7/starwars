import React from 'react';
import Item from '../item/item';
import Record from '../Record/record';
import withSwapi from '../hoc-helpers/with-swapi';

const PlanetDetails = ({getImage, onItemSelected, id}) => {
    return (
         <Item id={id} 
               onItemSelected={onItemSelected}
               getImage={getImage}>

               <Record label='Rotation Period' field="rotationPeriod"/>
               <Record label='Popoulation' field="popoulation"/>
               <Record label='Diameter' field="diameter"/>
         </Item>
    );                
}

const mapMethodsToProps = (swapiService) => {
    return {
          getImage: swapiService.getPlanetImage,
          onItemSelected: swapiService.getPlanet
    }
}

export default withSwapi(mapMethodsToProps)(PlanetDetails);