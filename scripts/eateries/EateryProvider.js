let eateryCollection = [];

export const useEateries = () => eateryCollection.slice();

export const getEateries = () => {
  return fetch(
    "http://holidayroad.nss.team/eateries?ameneties.playground=true&ameneties.diaperFacility=true"
  )
    .then(response => response.json())
    .then(parsedEateries => {
      eateryCollection = parsedEateries.slice();
    });
};
