// post fetch call 

let itineraries =[]

export const saveItinerary = note => {
  return fetch('http://localhost:3000/itineraries', {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(note)
   })
   .then(getIt)
 }

 export const useItineraries = () => {
  return itineraries
}

export const getIt = () => {
return fetch("http://localhost:3000/itineraries")
    .then(response => response.json())
    .then(
        parsedIt => {
          itineraries = parsedIt.slice()
           
        }
    )
}