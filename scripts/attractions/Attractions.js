const AttractionsComponent = (attractions) => {
   return `
   
    <section class="attractions">
            <div class="attractions__name">
                <h1>${attractions.name}</h1>
            </div>
        <div>state: ${attractions.state}</div>
        <div>city: ${attractions.city}</div>
        <div>description: ${attractions.description}</div>
        <div>souvenirs: ${attractions.ameneties.souvenirs}</div>
        <div>restrooms: ${attractions.ameneties.restrooms}</div>
        <button class ="detailsButton">details</button>
     </section>
    `
}
export default AttractionsComponent
