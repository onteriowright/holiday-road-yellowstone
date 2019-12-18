import Settings from "../../Settings.js";

let asideEateriesCollection = [];

export const UseAsideEateries = () => asideEateriesCollection.slice();

export const getAsideEateries = () => {
  return fetch(`${Settings.localEateriesAPI}`)
    .then(response => response.json())
    .then(parsedAsideEateries => {
      asideEateriesCollection = parsedAsideEateries.slice();
    });
};
