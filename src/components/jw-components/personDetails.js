import React from 'react';
import Item from '../item/item';
import Record from '../Record/record';
import withSwapi from '../hoc-helpers/with-swapi';

const PersonDetails = ({getImage, onItemSelected, id}) => {
    return (
          <Item id={id} 
                onItemSelected={onItemSelected}
                getImage={getImage}>

                <Record label='Gender' field='gender'/>
                <Record label='Birth Year' field='birthYear'/>
                <Record label='Eye Color' field='eyeColor'/>
          </Item>
    );
}

const mapMethodsToProps = (swapiService) => {
      return {
            getImage: swapiService.getPersonImage,
            onItemSelected: swapiService.getPerson
      }
}

export default withSwapi(mapMethodsToProps)(PersonDetails);