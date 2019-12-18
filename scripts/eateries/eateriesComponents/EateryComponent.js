export const EateryComponent = eatery => {
  return `
  <section eatery-card>
    <div class="eatery-info eatery-name">${eatery.businessName}</div>
    <button id="openDialog--${eatery.id}">Learn More</button>
    <dialog>
      <div class="eatery-info">City: ${eatery.city}</div>
      <div class="eatery-info">State: ${eatery.state}</div>
      <div class="eatery-info">Wheel Chair Accessible: ${eatery.ameneties.wheelchairAccessible}
      </div>
      <div class="eatery-info">Pet Friendly: ${eatery.ameneties.petFriendly}</div>
      <div class="eatery-info">Wifi: ${eatery.ameneties.wifi}</div>
      <div class="eatery-info">Diaper Facility: ${eatery.ameneties.diaperFacility}</div>
      <div class="eatery-info">Playground for kids: ${eatery.ameneties.playground}</div>
      <div class="eatery-info">Restrooms: ${eatery.ameneties.restrooms}</div>
      <div class="eatery-info">Description: ${eatery.description}</div>
      <button id="closeDialog--${eatery.id}">Close</button>
    </dialog>
  </section>
      `;
};
