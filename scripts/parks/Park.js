const parkComponent = (park) =>{
  return `
  <section class="parkCard">
    <h2 class="parkCard__name">${park.name}</h2>
      <div class="parksDialog">
      <button id="parks--${park.parkCode}">Learn More</button>
      <dialog class='dialog--park_info'>
        <h3>${park.name}</h3>
        <div class="parkCard__state">${park.states}</div>
        <br>
        <div class="parkCard__directions">${park.directionsInfo}</div>
        <br>
        <button class='button--close' id='close--${park.parkCode}'>Close Info</button>
      </dialog>
    </div>
  </section>
  `

}

export default parkComponent