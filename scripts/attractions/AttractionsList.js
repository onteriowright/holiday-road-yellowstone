// import { useAttractions } from "./AttractionProvider.js"
// import AttractionsComponent from "./attractions.js"

// const eventHub = document.querySelector(".container")
// const contentTarget = document.querySelector(".attractions__preview")




// export const AttractionsListComponent = () => {
//   const attractionListCollection = useAttractions()

  

//   eventHub.addEventListener('attractionSelected', changeEvent => {

//     const selectedAttraction = attractionListCollection.filter(attraction => {
//       if (attraction.name === changeEvent.detail.location) {
//         return attraction

//       }
//     }
//     )
//     render(selectedAttraction)
//   })








//   let render = attractionListCollection => {
//     contentTarget.innerHTML = `
//   ${attractionListCollection.map(location => { return AttractionsComponent(location) }).join(" ")}
  
//   `



//   }

// }










import { UseAttractions } from "./AttractionProvider.js";
import { AttractionsComponent } from "./Attractions.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".attractions__preview");

export const AttractionsListComponent = () => {
  const useAttractions = UseAttractions();

  eventHub.addEventListener("attractionsSelected", e => {
    const selectedAttractions = e.detail.selectedAttractions;

    const matchingAttractions = useAttractions.filter(attractions => {
      if (attractions.businessName === selectedAttractions) {
        return attractions;
      }
    });
    renderData(matchingAttractions);
  });

  const renderData = attractions => {
    targetElement.innerHTML = `
      <section>
        ${attractions.map(attractions => AttractionsComponent(attractions))}
      </section>
  `;
  };
};
