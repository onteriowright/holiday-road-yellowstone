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
    

    else
    
    {

      document.getElementById("saveItinerary").disabled = true
    }

    
    
    
    
    
    
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
}





