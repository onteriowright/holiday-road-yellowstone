import Settings from "../Settings.js";

let weather = [];

export const getWeather = zipCode => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=54c4fbef6d08003a44df82cd5a0e1e22`
  )
    .then(response => response.json())
    .then(parsedWeather => {
      weather = parsedWeather;
    });
};

export const useWeather = () => {
  return weather;
};
