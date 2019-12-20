import { UseEateries } from "./EateryDataProvider.js";
import { EateryComponent } from "./EateryComponent.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".eateries__preview");

export const EateriesListComponent = () => {
  // I am the array
  const useEateries = UseEateries();

  eventHub.addEventListener("eaterySelected", e => {
    const selectedEatery = e.detail.selectedEatery;
    // I find and return matching businessName
    const matchingEateries = useEateries.filter(eatery => {
      if (eatery.businessName === selectedEatery) {
        return eatery;
      }
    });
    renderData(matchingEateries);
  });
  // I render eatery to the DOM
  const renderData = eateries => {
    targetElement.innerHTML = `
      <section>
        ${eateries.map(eatery => EateryComponent(eatery))}
      </section>
  `;
  };
};
