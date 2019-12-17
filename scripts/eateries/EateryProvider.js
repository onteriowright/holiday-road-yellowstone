import Settings from "../Settings.js";

let eateryCollection = [];

export const useEateries = () => eateryCollection.slice();

export const saveEateries = eatery => {
  return fetch("http://localhost:8088/itineraries", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(eatery)
  }).then(getEateries);
};

export const getEateries = () => {
  return fetch(`${Settings.eateries}`)
    .then(response => response.json())
    .then(parsedEateries => {
      eateryCollection = parsedEateries.slice();
    });
};
