// component of how it will display on DOM 
const itineraryAside = (it) => {
  return `
  <section class="itineraryCard">
  <div class="parkName">${it.parkName}</div>
  <div class="attractionName">${it.attractionName}</div>
  <div class="eateryName">${it.eateryName}</div>
  `
}
export default itineraryAside