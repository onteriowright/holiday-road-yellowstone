import { useEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".eateriesDropdown");

export const EateryListcomponent = () => {
  const UseEateries = useEateries();

  eventHub.addEventListener("change", e => {
    if (e.target.id === "selectEatery") {
      const selectedEatery = e.target.value;
      const newItinerary = new CustomEvent("eaterySelected", {
        detail: {
          selectedEatery: selectedEatery
        }
      });
      eventHub.dispatchEvent(newItinerary);
    }
  });

  targetElement.innerHTML = `
    <select id="selectEatery">
      <option value="0" class="dropdown">Choose Your Eatery.....</option>
      ${UseEateries.map(
        eatery =>
          `<option value="${eatery.businessName}">${eatery.businessName}</option>`
      ).join(", ")}
    </select>
  `;
};
