import React from 'react';

import { getPredictions, getPredictionByPlaceId } from '../../apis/google';

const withGetAddress = Component => props => {

  const getAddress = async ({ address }) => {
    const response = await getPredictions({ address });

    let returnPredictions = [{
      description: 'Nenhum endereço encontrado',
      placeId: null
    }];

    if (!response.error) {
      const { predictions } = response;

      if (predictions.length > 0) {
        returnPredictions = [ ...predictions ];
      }
    } 

    return returnPredictions;
  };

  const getAddressById = async ({ placeId }) => {
    const response = await getPredictionByPlaceId({ placeId });
    let returnAddress = null;

    if (!response.error) {
      const { data: { results } } = response;

      if (results.length > 0) {
        returnAddress = {
          formatted_address: results[0].formatted_address,
          geometry: results[0].geometry.location
        };
      }
    } 

    return returnAddress;
  };

  const setProps = {
    getAddress,
    getAddressById
  }

  return <Component { ...setProps } { ...props } />;
};
export default withGetAddress;