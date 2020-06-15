// import { saveItinerary } from "./EateryDataProvider.js";
// import { asideItineraryComponent } from "../asideItineraryComponents/asideItineraryComponent.js";
// const eventHub = document.querySelector(".container");
// const targetElement = document.querySelector(".itinerary");
// export const saveItineraryListComponent = () => {
//   eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "saveItinerary") {
//       const eateryName = document.querySelector(".eateryCard__name")
//         .textContent;
//       const parkName = document.querySelector(".parkCard__name").textContent;
//       const attractionName = document.querySelector(".attractions__name")
//         .textContent;

//       const savedItinerary = {
//         eateryName: eateryName,
//         parkName: parkName,
//         attractionName: attractionName
//       };
//       saveItinerary(savedItinerary).then(renderData(savedItinerary));
//     }
//   });

//   const renderData = asideItineraryCollection => {
//     targetElement.innerHTML = `
//   ${asideItineraryComponent(asideItineraryCollection)}
//     `;
//   };
// };
