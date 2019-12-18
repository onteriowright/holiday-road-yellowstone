export const asideEateriesComponent = eatery => {
  return `
    <section>
      <div>${eatery.eateryName}</div>
      <div>${eatery.attractionName}</div>
      <div>${eatery.parkName}</div>
    </section>
  `;
};
