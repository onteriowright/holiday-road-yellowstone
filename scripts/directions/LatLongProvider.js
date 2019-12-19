
let parksLatLong ={}


export const getParkLatLong = (selectedPark) => {


  return fetch(`https://graphhopper.com/api/1/geocode?q=${selectedPark}&locale=us&debug=true&key=bcf6d4a7-4208-40e5-bb3f-e1c2c724470e`)
      .then(response => response.json())
      .then(
          parsed => {
              parksLatLong = parsed
          }
      )
}


export const useParkLatLong = () => {
  return parksLatLong
}



// nashville 
// "point": 
//   "lng": -86.7743531,
//   "lat": 36.1622296
// 