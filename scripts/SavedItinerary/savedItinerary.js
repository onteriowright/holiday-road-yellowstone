// component of how it will display on DOM 
const itineraryAside = (it) => {
  return `
  <section class="itineraryCard">
  <div class="parkName">${it.parkName}</div>
  <div class="attractionName">${it.attractionName}</div>
  <div class="eateryName">${it.eateryName}</div>
<<<<<<< HEAD
  <button id="getDirections"> get directions </button>
    <dialog class='dialog--directions_info'>
      <h3></h3>
      <div class="directionsCard__state"></div>
      <br>
      <div class="directionsCard__directions"></div>
      <br> 
      <button class='button--close2' id='close--'>Close Info</button>
    </dialog>
  
=======
  <div class="directionsDialog">
  <button id="getDirections">Get Directions</button>
    <dialog class='dialog--direction_info'>
      <h3>Step by Step</h3>
      <div class="parkCard__state"></div>
      <br>
      <div class="parkCard__directions"></div>
      <br>
      <button class='button--close2'>Close</button>
    </dialog>
  </div>
  </section>
>>>>>>> nm-yellowstone
  `
}
export default itineraryAside