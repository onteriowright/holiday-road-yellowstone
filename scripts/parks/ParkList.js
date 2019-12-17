import { useParks } from "./ParkProvider.js"
import parkComponent from "./Park.js"

// listens for park that was selected 

const eventHub=document.querySelector(".container")
const contentElement=document.querySelector(".parks__preview")

const parkListComponent = () => {

  const parks =useParks()
  
  eventHub.addEventListener("parkSelected", event =>{
    const parkName=event.detail.park
    
    const filteredParks=parks.data.filter(
      (individualPark) => {
        if(individualPark.fullName===parkName){
          return individualPark
        }
      }
    )
      render(filteredParks)
  })


  
  const render = parkCollection => {
    contentElement.innerHTML=`
    ${
      parkCollection.map(
        (park)=>{
          return parkComponent(park)
        }
      ).join("")
    }
    `
  }



}

export default parkListComponent