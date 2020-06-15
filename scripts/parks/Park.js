const parkComponent = park => {
  return `
  <section class="parkCard">
    <h3 class="parkCard__name">${park.name}</h3>
    <div class="parksDialog">
    <button id="parks--${park.parkCode}" class="learnButton">Learn More</button>
    <dialog class='dialog--park_info dialogsStyle'>
      <h3>${park.name}</h3>
      <div class="parkCard__state">${park.states}</div>
      <br>
      <div class="parkCard__directions">${park.directionsInfo}</div>
      <br>
      <button class='button--close' id='close--${park.parkCode}'>Close Info</button>
    </dialog>
  </div>
  </section>
  `;
};

export default parkComponent;
