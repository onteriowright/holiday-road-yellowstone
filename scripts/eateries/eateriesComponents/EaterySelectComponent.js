import { UseEateries } from "./EateryDataProvider.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".eateriesDropdown");

export const EaterySelectListcomponent = () => {
  const useEateries = UseEateries();
  // I listen for change in eventHub, then I create custom EventListener and send new Itinerary
  eventHub.addEventListener("change", e => {
    if (e.target.id === "selectEatery") {
      // I store selected eatery in varible
      const selectedEatery = e.target.value;
      const newItinerary = new CustomEvent("eaterySelected", {
        detail: {
          selectedEatery: selectedEatery
        }
      });
      eventHub.dispatchEvent(newItinerary);
    }
  });
  // I render select to the DOM
  const renderData = eateryCollection => {
    targetElement.innerHTML = `
      <select id="selectEatery" class="dropdown">
        <option value="0">Choose Your Eatery.....</option>
        ${eateryCollection
          .map(
            eatery =>
              `<option value="${eatery.businessName}">${eatery.businessName}</option>`
          )
          .join(", ")}
      </select>
    `;
  };
  renderData(useEateries);
};
