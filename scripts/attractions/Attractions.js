const AttractionsComponent = (attractions) => {
   return `
   
    <section class="attractions">
            <div class="attractions__name">
                <h1>${attractions.name}</h1>
            </div>
<<<<<<< HEAD
        <div>state: ${attractions.state}</div>
        <div>city: ${attractions.city}</div>
        <div>description: ${attractions.description}</div>
        <div>souvenirs: ${attractions.ameneties.souvenirs}</div>
        <div>restrooms: ${attractions.ameneties.restrooms}</div>
        <button class ="">details</button>
=======
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
>>>>>>> master
     </section>
    `
}
export default AttractionsComponent
