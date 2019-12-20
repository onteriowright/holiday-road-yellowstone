// put the fetch get call here with interpolation 

let directions = []

export const getDirectionsLatLong = (selectedDirections) => {


  return fetch(`https://graphhopper.com/api/1/route?point=${lat},${lng}&point=destination_latitude,destination_longitude&vehicle=car&locale=us&instructions=true&calc_points=true&key=your_api_key`)
      .then(response => response.json())
      .then(
          parsed => {
              directions = parsed
          }
      )
}

export const useDirectionsLatLong = () => {
  return directions
}
