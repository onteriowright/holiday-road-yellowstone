// import { useAttractions } from "./AttractionProvider.js"

// const contentTarget = document.querySelector(".attractionsDropdown")
// const eventHub = document.querySelector(".container")

// const AttractionsSelect = () => {

//   const attractions = useAttractions()

//   eventHub.addEventListener("change", changeEvent => {
//     if (changeEvent.target.classList.contains("dropDown")) {
//       const selectedAttraction = changeEvent.target.value
//       console.log(selectedAttraction)

//       const message = new CustomEvent("attractionSelected", {

//         detail: {
//           location: selectedAttraction

//         }

  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.classList.contains("dropDown")) {
      const selectedAttraction = changeEvent.target.value
      

//       eventHub.dispatchEvent(message)

//     }




//   })



//   const render = (collectedAttractions) => {

//     contentTarget.innerHTML = `
//             <select class="dropDown" id="attractionsSelect">
//     <option value="0">Please select a attraction...</option>
    
    
    
//     ${collectedAttractions.sort().map(
//       places => `<option value="${places.name}">${places.name}</option>`

//     )}
//     </select>`
//   }

//   render(attractions)

// }

// export default AttractionsSelect















import { UseAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".attractionsDropdown");

export const AttractionsSelectListcomponent = () => {
  const useAttractions = UseAttractions();

  eventHub.addEventListener("change", e => {
    if (e.target.id === "selectAttractions") {
      const selectedAttractions = e.target.value;
      const newItinerary = new CustomEvent("attractionsSelected", {
        detail: {
          selectedAttractions: selectedAttractions
      });
      eventHub.dispatchEvent(newItinerary);
    }
  });

  const renderData = attractionsCollection => {
    targetElement.innerHTML = `
      <select id="selectAttractions">
        <option value="0" class="dropdown">Choose Your Attractions.....</option>
        ${attractionsCollection
          .map(
            attractions =>
              `<option value="${attractions.businessName}">${attractions.businessName}</option>`
          )
          .join(", ")}
      </select>
    `;
  };
  renderData(useAttractions);
};
