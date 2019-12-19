import { useWeather, getWeather } from "./WeatherProvider.js";
import { weatherComponent } from "./weather.js";
import { useParks } from "../parks/ParkProvider.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".weatherSection");

export const WeatherListComponent = () => {
  const gotWeather = useWeather();

  eventHub.addEventListener("parkSelected", event => {
    const parkCode = event.detail.park;
    const allParks = useParks();

    const foundPark = allParks.find(individualPark => {
      return individualPark.parkCode === parkCode;
    });

    const parkZipCode = foundPark.addresses[0].postalCode;
    getWeather(parkZipCode).then(() => {
      const theWeatherRightNow = useWeather();
      renderData(theWeatherRightNow.list);
    });
  });
  const renderData = weatherCollection => {
    targetElement.innerHTML = `
   <section>
    ${weatherCollection.map(weather => weatherComponent(weather))}
   </section>
  `;
  };
};
