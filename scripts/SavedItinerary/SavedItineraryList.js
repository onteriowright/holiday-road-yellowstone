import { saveItinerary } from "./SavedItineraryData.js";
const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".itinerary")

const SavedItineraryListComponent = () => {
     eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveItinerary") {
            const newItinerary = {
                name: document.querySelector(".attractionCard").textContent
            }
            saveItinerary(newItinerary)
    
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
        <section class="ItinerarySect">
            <div class="ItineraryName id="itinerary_text"></div>
        </section>    
        `
    }
    
    render()
}

export default SavedItineraryListComponent

                







                    //m

// import { useItinerary } from "./SavedItineraryData.js"
// // import { getAttractions } from "./AttractionProvider.js"

// const contentTarget = document.querySelector(".itineraryContainer")
// const eventHub = document.querySelector(".container")

// const SavedItineraryListComponent = () => {

//     // eventHub.addEventListener("click", clickEvent => {
//     //     if (clickEvent.target.id.startsWith("deleteNote--")) {
//     //         const [deletePrefix, noteId] = clickEvent.target.id.split("--")

//     //         deleteNote(noteId).then(
//     //             () => {
//     //                 const theNewNotes = useNotes()
//     //                 render(theNewNotes)
//     //             }
//     //         )
//     //     }
//     // })

//     const renderItineraryAgain = () => {
//         const allTheItinerary = useItinerary()
//         render(allTheItinerary)

//     }

//     eventHub.addEventListener("itineraryCreated", event => {
//         renderItineraryAgain()
//     })

//     eventHub.addEventListener("showItineraryButtonClicked", event => {
//         renderItineraryAgain()
//     })

//     const render = (itineraryCollection) => {
//         contentTarget.innerHTML = itineraryCollection.map(
//             (individualItinerary) => {
//                 return `
//                     <section class="note">
//                         <div>${individualNote.name}</div>
//                     </section>
//                 `
//             }
//         ).join("")
//     }

// }

// export default SavedItineraryListComponent

                    //m









// import { getItinerary, useItinerary, deleteItinerary } from "./SavedItineraryData.js"

// const contentTarget = document.querySelector(".itineraryContainer")
// const eventHub = document.querySelector(".container")

// const ItineraryListComponent = () => {

//     eventHub.addEventListener("click", clickEvent => {
//         if (clickEvent.target.id.startsWith("deleteItinerary--")) {
//             const [deletePrefix, itineraryId] = clickEvent.target.id.split("--")

//             deleteItinerary(itineraryId).then(
//                 () => {
//                     const theNewItinerary = useItinerary()
//                     render(theNewItinerary)
//                 }
//             )
//         }
//     })

//     const renderItineraryAgain = () => {
//         const allTheItinerary = useItinerary()
//         render(allTheItinerary)

//     }

//     eventHub.addEventListener("itineraryCreated", event => {
//         renderItineraryAgain()
//     })

//     eventHub.addEventListener("showItineraryButtonClicked", event => {
//         renderItineraryAgain()
//     })

//     const render = (itineraryCollection) => {
//         contentTarget.innerHTML = itineraryCollection.map(
//             (individualItinerary) => {
//                 return `
//                     <section class="Itinerary">
//                         <div>${individualItinerary.name}</div>
//                         <div>${individualItinerary.text}</div>
//                         <button id="deleteItinerary--${individualItinerary.id}">Delete</button>
//                     </section>
//                 `
//             }
//         ).join("")
//     }

// }

// export default ItineraryListComponent