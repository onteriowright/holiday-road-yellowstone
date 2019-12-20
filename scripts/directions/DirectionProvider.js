// put the fetch get call here with interpolation 

let directions = []

export const getDirection = (selectedLat,selectedLong) => {


  return fetch(`https://graphhopper.com/api/1/route?point=36.1622296,-86.7743531&point=${selectedLat},${selectedLong}&vehicle=car&locale=us&instructions=true&calc_points=true&key=bcf6d4a7-4208-40e5-bb3f-e1c2c724470e`)
      .then(response => response.json())
      .then(
          parsed => {
              directions = parsed.paths.slice()
          }
      )
}


export const useDirections = () => {
  return directions
}

