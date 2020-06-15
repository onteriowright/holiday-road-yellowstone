// import { saveItinerary, getItinerary } from "./SavedItineraryData.js"

// const eventHub = document.querySelector(".container")
// const contentTarget = document.querySelector(".itineraryFormContainer")


// const ItineraryFormComponent = () => {

//     eventHub.addEventListener("click", clickEvent => {
//         if (clickEvent.target.id === "saveItinerary") {
//             const newItinerary = {
//                 text: document.querySelector("#itinerary-text").value,
//                 name: document.querySelector("#itinerary-attractions").value
                
//             }

//             saveItinerary(newItinerary).then(
//                 () => {
//                     const message = new CustomEvent("itineraryCreated")
//                     eventHub.dispatchEvent(message)
//                 }
//             )

//         }
//     })

//     eventHub.addEventListener("click", clickEvent => {
//         if (clickEvent.target.id === "showItinerary") {
//             const message = new CustomEvent("showItineraryButtonClicked")
//             eventHub.dispatchEvent(message)
//         }
//     })

//     const render = () => {
//         contentTarget.innerHTML = `
//             <details>
//                 <summary>Itinerary</summary>
//                 <div class="itinerary__field">
//                     Note: <input type="text" id="itinerary-text" />
//                 </div>
//                 <div class="itinerary__field">
//                     Attractions: <input type="text" id="itinerary-attractions" />
//                 </div>
//                 <button class="itinerary__field" id="saveItinerary">Save Itinerary</button>
//                 <button class="itinerary__field" id="showItinerary">Show Itinerary</button>
//             </details>
//         `
//     }

//     render()
// }

// export default ItineraryFormComponent