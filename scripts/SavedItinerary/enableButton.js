const eventHub = document.querySelector(".container")





export const EnableButtonEvent = () => {
  
  document.getElementById("saveItinerary").disabled = true
  
  eventHub.addEventListener("change", event => {
    
    if (document.querySelector(".attractions__preview").innerHTML !="" 
        && document.querySelector(".parks__preview").innerHTML !=""
        && document.querySelector(".eateries__preview").innerHTML !="") 
    {
      document.getElementById("saveItinerary").disabled = false
    } 
    
  }) 
}

// export const DisableButton = () => {
//   if (document.querySelector(".attractionsDropdown").value ==="0" 
//   || document.querySelector(".parksDropdown").value ==="0"
//   || document.querySelector(".eateriesDropdown").value ==="0"
  
  
//   ) {
//     document.getElementById("saveItinerary").disabled = true

//   }





// }




