let parks = [];

export const getParks = () => {
  return fetch(
    "https://developer.nps.gov/api/v1/parks?api_key=HiRanrI946cvTg3hgpSA0d6uEI6dg868NiXbbCaM&fields=images&fields=addresses"
  )
    .then(response => response.json())
    .then(parsedParks => {
      parks = parsedParks.data;
    });
};

export const useParks = () => {
  return parks.slice();
};
