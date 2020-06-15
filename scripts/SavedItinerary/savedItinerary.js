// component of how it will display on DOM
const itineraryAside = it => {
  return `
  <section class="itineraryCard">
  <div class="parkName itinerary-info"><h3 class="parkC">Park: </h3><h4>${it.parkName}</h4></div>
  <div class="attractionName itinerary-info"><h3 class="attractionsC">Attraction: </h3><h4>${it.attractionName}</h4></div>
  <div class="eateryName itinerary-info"><h3 class="eatC">Eatery: </h3><h4>${it.eateryName}</h4></div>
  `;
};
export default itineraryAside;