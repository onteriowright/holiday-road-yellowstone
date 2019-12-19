import Settings from "../../Settings.js";

let eateryCollection = [];

export const UseEateries = () => eateryCollection.slice();

export const saveItinerary = itinerary => {
  return fetch(`${Settings.localEateriesAPI}`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(itinerary)
  }).then(getEateries);
};

export const getEateries = () => {
  return fetch(`${Settings.eateriesAPI}`)
    .then(response => response.json())
    .then(parsedEateries => {
      eateryCollection = parsedEateries.slice();
    });
};
