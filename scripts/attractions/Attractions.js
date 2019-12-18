const AttractionsComponent = (attractions) => {
   return `
   
    <section class="attractions">
            <div>
                <h1 class="attractions__name">${attractions.name}</h1>
            </div>
        <div>
        <button id ="detailsButton">Learn More</button>
            
            <dialog class="attractionsDetail">
                <div ></div>
                <div>state: ${attractions.state}</div>
                <div>city: ${attractions.city}</div>
                <div>description: ${attractions.description}</div>
                <div>souvenirs: ${attractions.ameneties.souvenirs}</div>
                <div>restrooms: ${attractions.ameneties.restrooms}</div>


               
                <button id="button--close">Close Dialog</button>
        
      
      </dialog>
      </div>
     </section>
    `
}
export default AttractionsComponent
