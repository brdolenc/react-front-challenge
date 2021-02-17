import axios from 'axios';

export async function getPredictions({ address }) {
  const sessionToken = new window.google.maps.places.AutocompleteSessionToken();
  const queryParams = { input: address, sessionToken: sessionToken };

  const autocompleteService = new window.google.maps.places.AutocompleteService();

  const promise = new Promise((resolve) => {
    autocompleteService.getQueryPredictions(
      queryParams,
      (predictions, status) => {
        const resturnPredictions = (predictions || [])
          .filter(p => p.place_id)
          .map(p => {
            return {
              placeId: p.place_id,
              description: p.description
            };
          });

          
          if (status === 'OK') resolve({
            error: false,
            predictions: resturnPredictions
          });

          return resolve({
            error: true
          });
      }
    );
  });

  return Promise.all([promise]).then((values) => {
    return values[0];
  });

}

export async function getPredictionByPlaceId({ placeId }) {
  try {
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${process.env.API_GOOGLE_KEY}`);

    if (response.status === 200) return {
      error: false,
      ...response
    };

    return {
      error: true
    };
  } catch (e) {
    return {
      error: true
    };
  }
}