import { getParkLatLong } from "./LatLongProvider.js"
import {parkLatDirect} from "./DirectionLatLong.js"


const eventHub=document.querySelector(".container")


export const ParkLatLong = () =>{

  eventHub.addEventListener("parkSelected", e =>{
   const selectedPark=e.detail.park
   console.log(e.detail.park)
   getParkLatLong(selectedPark).then(() => parkLatDirect())
  })
  
}
