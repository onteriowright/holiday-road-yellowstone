// const setItinerary = (itineraryArray) => {
//     itinerary = itineraryArray.slice()
// }

// export const useItinerary = () => itinerary.slice()

let itinerary = []

const useItinerary = () => {
  itinerary = useItinerary()
}

export const saveItinerary = itinerary => {
  fetch('http://localhost:8088/Itinerary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(itinerary)
  }).then(useItinerary)
}

// let itinerary = []

// const setItinerary = (itineraryArray) => {
//     itinerary = itineraryArray.slice()
// }

// export const useItinerary = () => itinerary.slice()

// export const deleteItinerary = (itineraryId) => {
//     return fetch(`http://localhost:8088/itinerary/${itineraryId}`, {
//         method: "DELETE"
//     })
//     .then(getItinerary)
// }

// export const saveItinerary = itinerary => {
//     return fetch('http://localhost:8088/itinerary', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(itinerary)
//     })
//     .then(getItinerary)
// }

// export const getItinerary = () => {
//     return fetch("http://localhost:8088/itinerary")
//         .then(response => response.json())
//         .then((itineraryArray) => {
//             itinerary = itineraryArray.slice()
//         })
// }
