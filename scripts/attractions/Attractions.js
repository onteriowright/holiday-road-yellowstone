// const AttractionsComponent = (attractions) => {
//    return `
   
//     <section class="attractions">
//             <div class="attractions__name">
//                 <h1 class"attractionCard">${attractions.name}</h1>
//             </div>
//         <div>
//         <button id ="detailsButton">Learn More</button>
            
//             <dialog class="attractionsDetail">
//                 <div ></div>
//                 <div>state: ${attractions.state}</div>
//                 <div>city: ${attractions.city}</div>
//                 <div>description: ${attractions.description}</div>
//                 <div>souvenirs: ${attractions.ameneties.souvenirs}</div>
//                 <div>restrooms: ${attractions.ameneties.restrooms}</div>


               
//                 <button id="button--close">Close Dialog</button>
        
      
//       </dialog>
//       </div>
//      </section>
//     `
// }
// export default AttractionsComponent










export const AttractionsComponent = attractions => {
  return `
  <section attractions-card>
      <div class="attractions-info"><h2>You Have Chosen:</h2> ${attractions.businessName}</div>
      <button id="openDialog--${attractions.id}">Learn More</button>
        <dialog>
          <div class="attractions-info">City: ${attractions.city}</div>
          <div class="attractions-info">State: ${attractions.state}</div>
          <div class="attractions-info">Wheel Chair Accessible: ${attractions.ameneties.wheelchairAccessible}
          </div>
          <div class="attractions-info">Pet Friendly: ${attractions.ameneties.petFriendly}</div>
          <div class="attractions-info">Wifi: ${attractions.ameneties.wifi}</div>
          <div class="attractions-info">Diaper Facility: ${attractions.ameneties.diaperFacility}</div>
          <div class="attractions-info">Playground for kids: ${attractions.ameneties.playground}</div>
          <div class="attractions-info">Restrooms: ${attractions.ameneties.restrooms}</div>
          <div class="attractions-info">Description: ${attractions.description}</div>
          <button id="closeDialog--${attractions.id}">Close</button>
        </dialog>
      </section>
      `;
};
