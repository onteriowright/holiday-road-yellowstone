import { useParks } from "./ParkProvider.js";
import parkComponent from "./Park.js";

// listens for park that was selected

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".parks__preview");

const parkListComponent = () => {
  const parks = useParks();

  eventHub.addEventListener("parkSelected", event => {
    const parkCode = event.detail.park;

    const filteredParks = parks.find(individualPark => {
      return individualPark.parkCode === parkCode;
    });
    // console.log(filteredParks);
    render(filteredParks);
  });

  const render = parkCollection => {
    contentElement.innerHTML = `
    ${parkComponent(parkCollection)}
    `;
  };
};

export default parkListComponent;
