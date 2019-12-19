// component of how it will display on DOM 
const itineraryAside = (it) => {
  return `
  <section class="itineraryCard">
  <div class="parkName">${it.parkName}</div>
  <div class="attractionName">${it.attractionName}</div>
  <div class="eateryName">${it.eateryName}</div>
  <button id="getDirections"> get directions </button>
    <dialog class='dialog--directions_info'>
      <h3></h3>
      <div class="directionsCard__state"></div>
      <br>
      <div class="directionsCard__directions"></div>
      <br> 
      <button class='button--close2' id='close--'>Close Info</button>
    </dialog>
  
  `
}
export default itineraryAside