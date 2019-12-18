

// let attractions = []

// export const useAttractions = () => {
//     return attractions
// }

// export const getAttractions = () => {
//     return fetch("http://holidayroad.nss.team/bizarreries")
//         .then(response => response.json())
//         .then(
//             parsedAttractions => {
//                 console.log(parsedAttractions)
//                 attractions = parsedAttractions.slice()
//             }
//         )
// }











import Settings from '../../Settings.js'

let attractionsCollection = []

export const UseAttractions = () => attractionsCollection.slice()

export const saveAttractions = attractions => {
  return fetch(`${Settings.localAttractionsAPI}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(attractions)
  }).then(getAttractions)
}

export const getAttractions = () => {
  return fetch(`${Settings.attractions}`)
    .then(response => response.json())
    .then(parsedAttractions => {
      attractionsCollection = parsedAttractions.slice()
    })
}
