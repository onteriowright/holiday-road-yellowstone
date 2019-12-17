import { saveEateries, UseEateries } from "./EateryDataProvider.js";
import { AsideEateryComponent } from "./asideEateryComponent.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".itinerary");

export const SavedEateryListComponent = () => {
  const useEateries = UseEateries();

  eventHub.addEventListener("eaterySelected", e => {
    eventHub.addEventListener("click", evt => {
      if (evt.target.classList.contains("saveItinerary")) {
        const savedEatery = e.detail.selectedEatery;

        useEateries.filter(currentEatery => {
          if (currentEatery.businessName === savedEatery) {
            const savedEatery = {
              businessName: currentEatery.businessName,
              city: currentEatery.city,
              state: currentEatery.state,
              wheelchairAccessible:
                currentEatery.ameneties.wheelchairAccessible,
              petFriendly: currentEatery.ameneties.petFriendly,
              wifi: currentEatery.ameneties.wifi,
              diaperFacility: currentEatery.ameneties.diaperFacility,
              playground: currentEatery.ameneties.playground,
              restrooms: currentEatery.ameneties.restrooms
            };
            saveEateries(savedEatery);
          }
        });
        renderData(currentEatery);
      }
    });
  });

  const renderData = data => {
    targetElement.innerHTML = `
      <section>
        ${AsideEateryComponent(data)}
      </section>
    `;
  };
};
