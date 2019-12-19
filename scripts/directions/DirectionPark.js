import { getParkLatLong } from "./LatLongProvider.js"


const eventHub=document.querySelector(".container")


export const ParkLatLong = () =>{

  eventHub.addEventListener("parkSelected", e =>{
   const selectedPark=e.detail.park
   console.log(e.detail.park)
   getParkLatLong(selectedPark)
  })
  
}
