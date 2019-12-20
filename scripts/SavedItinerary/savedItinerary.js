// component of how it will display on DOM
const itineraryAside = it => {
  return `
  <section class="itineraryCard">
  <div class="parkName itinerary-info"><h4>${it.parkName}</h4></div>
  <div class="attractionName itinerary-info"><h4>${it.attractionName}</h4></div>
  <div class="eateryName itinerary-info"><h4>${it.eateryName}</h4></div>
  `;
};
export default itineraryAside;
