export const AsideAttractionComponent = data => {
  return `
    <section>
      <div>${data.name}</div>
      <div>${data.city}</div>
      <div>${data.state}</div>
    </section>
  `;
};