// component of how it will display on DOM
const itineraryAside = it => {
  return `
  <section class="itineraryCard">
  <div class="parkName">${it.parkName}</div>
  <div class="attractionName">${it.attractionName}</div>
  <div class="eateryName">${it.eateryName}</div>
  <div class="directionsDialog">
 <button id="getDirections">Get Directions</button>
    <dialog class='dialog--direction_info'>
      
      
    </dialog>
  </div>
  </section>
  `
}
export default itineraryAside
