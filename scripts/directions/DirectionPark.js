import { getParkLatLong } from "./LatLongProvider.js"
import LatLongVariables from "./DirectionLatLong.js"



const eventHub=document.querySelector(".container")


export const ParkLatLong = () =>{

  eventHub.addEventListener("parkSelected", e =>{
   const selectedPark=e.detail.park
   getParkLatLong(selectedPark).then(() => LatLongVariables(selectedPark))
  })
  
}
