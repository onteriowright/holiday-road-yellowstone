export const EateryComponent = eatery => {
  return `
  <section eatery-card>
      <div>Eatery: ${eatery.businessName}</div>
      <div>City: ${eatery.city}</div>
      <div>State: ${eatery.state}</div>
      <div>Wheel Chair Accessible: ${eatery.ameneties.wheelchairAccessible}</div>
      <div>Pet Friendly: ${eatery.ameneties.petFriendly}</div>
      <div>Wifi: ${eatery.ameneties.wifi}</div>
      <div>Diaper Facility: ${eatery.ameneties.diaperFacility}</div>
      <div>Playground for kids: ${eatery.ameneties.playground}</div>
      <div>Restrooms: ${eatery.ameneties.restrooms}</div>
      <div>Description: ${eatery.description}</div>
    </section>
  `;
};
