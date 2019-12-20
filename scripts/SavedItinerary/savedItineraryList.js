import { saveItinerary, getIt, useItineraries } from "./savedItineraryData.js"
import itineraryAside from "./savedItinerary.js"

// add event listeners and object for posting new itinerary 

// if statement to connect to button 

// make your newItinerary object 
// render 
const eventHub = document.querySelector(".container")
const contentTarget=document.querySelector(".itinerary")

const saveItineraryComponent = () =>{
 
  eventHub.addEventListener("click", e =>{
   
    if(e.target.id==="saveItinerary"
    
    ){
      const parkName=document.querySelector(".parkCard__name").textContent
      const attractionName=document.querySelector(".attractionCard__name").textContent
      const eateryName=document.querySelector(".eateryCard__name").textContent
  
      console.log(parkName)
      console.log(attractionName)
      console.log(eateryName)
    const newItinerary = {
      // Key/value pairs here
      "parkName":parkName,
      "attractionName":attractionName,
      "eateryName":eateryName
         
    } 
    saveItinerary(newItinerary).then(render(newItinerary))


    
  }




})


const render = (collection) =>{
  contentTarget.innerHTML= `
  ${
    itineraryAside(collection)
  }
  `
}

}


export default saveItineraryComponent


