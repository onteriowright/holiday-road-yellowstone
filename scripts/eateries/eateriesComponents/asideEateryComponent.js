export const AsideEateryComponent = data => {
  return `
    <section>
      <div>${data.businessName}</div>
      <div>${data.city}</div>
      <div>${data.state}</div>
    </section>
  `;
};
