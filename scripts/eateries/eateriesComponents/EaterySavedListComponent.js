import { saveEateries } from "./EateryDataProvider.js";
import { asideEateriesComponent } from "../asideEateriesComponents/asideEateriesComponent.js";
const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".itinerary");

export const SavedEateryListComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary") {
      const eateryName = document.querySelector(".eatery-name").textContent;
      const parkName = document.querySelector(".parkCard__name").textContent;
      const attractionName = document.querySelector(".attractions__name")
        .textContent;

      const savedItinerary = {
        eateryName: eateryName,
        parkName: parkName,
        attractionName: attractionName
      };
      saveEateries(savedItinerary).then(renderData(savedItinerary));
    }
  });

  const renderData = asideEateriesCollection => {
    targetElement.innerHTML = `
  ${asideEateriesComponent(asideEateriesCollection)}
    `;
  };
};
