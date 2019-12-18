import { saveAttractions, UseAttractions } from "./AttractionProvider.js";
import { AsideAttractionsComponent } from "./asideAttractionsComponent.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".itinerary");

export const SavedAttractionsListComponent = () => {
  const useAttractions = UseAttractions();

  eventHub.addEventListener("attractionsSelected", e => {
    eventHub.addEventListener("click", evt => {
      if (evt.target.classList.contains("saveItinerary")) {
        const savedAttractions = e.detail.selectedAttractions;

        useAttractions.filter(currentAttractions => {
          if (currentAttractions.businessName === savedAttractions) {
            const savedAttractions = {
              businessName: currentAttractions.businessName,
              city: currentAttractions.city,
              state: currentAttractions.state,
              wheelchairAccessible:
                currentAttractions.ameneties.wheelchairAccessible,
              petFriendly: currentAttractions.ameneties.petFriendly,
              wifi: currentAttractions.ameneties.wifi,
              diaperFacility: currentAttractions.ameneties.diaperFacility,
              playground: currentAttractions.ameneties.playground,
              restrooms: currentAttractions.ameneties.restrooms
            };
            saveAttractions(savedAttractions);
          }
        });
        renderData(currentAttractions);
      }
    });
  });

  const renderData = data => {
    targetElement.innerHTML = `
      <section>
        ${AsideAttractionsComponent(data)}
      </section>
    `;
  };
};
