import { UseEateries } from "./EateryDataProvider.js";
import { EateryComponent } from "./EateryComponent.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".eateries__preview");

export const EateriesListComponent = () => {
  const useEateries = UseEateries();

  eventHub.addEventListener("eaterySelected", e => {
    const selectedEatery = e.detail.selectedEatery;

    const matchingEateries = useEateries.filter(eatery => {
      if (eatery.businessName === selectedEatery) {
        return eatery;
      }
    });
    renderData(matchingEateries);
  });

  const renderData = eateries => {
    targetElement.innerHTML = `
      <section>
        ${eateries.map(eatery => EateryComponent(eatery))}
      </section>
  `;
  };
};
