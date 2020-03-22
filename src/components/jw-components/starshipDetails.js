import React from 'react';
import Item from '../item/item';
import Record from '../Record/record';
import withSwapi from '../hoc-helpers/with-swapi';

const StarshipDetails = ({getImage, onItemSelected, id}) => {
    return (
          <Item id={id} 
                onItemSelected={onItemSelected}
                getImage={getImage}>
                              
                <Record label='Model' field="model"/>
                <Record label='Lenght' field="length"/>
                <Record label='Cost in credits' field="data.cost_in_credits"/>
          </Item>
    );
}

const mapMethodsToProps = (swapiService) => {
      return {
            getImage: swapiService.getStarshipImage,
            onItemSelected: swapiService.getStarship
      }
}

export default withSwapi(mapMethodsToProps)(StarshipDetails);