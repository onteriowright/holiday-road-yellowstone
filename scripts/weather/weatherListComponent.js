import { useWeather, getWeather } from "./WeatherProvider.js";
import { weatherComponent } from "./weather.js";
import { useParks } from "../parks/ParkProvider.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".weatherSection");

export const WeatherListComponent = () => {
  // I listen for selected park
  eventHub.addEventListener("parkSelected", event => {
    // I store selected park
    const selectedPark = event.detail.park;
    // current parks array
    const allParks = useParks();
    // I find matching park
    const foundPark = allParks.find(individualPark => {
      return individualPark.parkCode === selectedPark;
    });

    // I got park zipCode
    const parkZipCode = foundPark.addresses[0].postalCode;

    // I fetch park by zideCode
    getWeather(parkZipCode).then(() => {
      // current array after fetch
      const theWeatherRightNow = useWeather();
      renderData(theWeatherRightNow.list);
    });
  });

  // I render the weather component`
  const renderData = weatherCollection => {
    targetElement.innerHTML = `
   <section class="weather-display">
    ${weatherCollection
      .map(weather => {
        // I split the dt_txt to just get the time`
        const [prefix, hour] = weather.dt_txt.split(" ");
        if (hour === "00:00:00") {
          return weatherComponent(weather);
        }
      })
      .join("")}
   </section>
  `;
  };
};
