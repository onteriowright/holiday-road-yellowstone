import { useDirections } from "./DirectionProvider.js";

const DirectionList = () =>{

  const directions=useDirections()


 const contentElement=document.querySelector(".dialog--direction_info")

 contentElement.innerHTML=`
 
 <h3>Step by Step</h3>
 <div class="direction__distance">${directions[0].instructions.map(inst=>{return `
 <li> ${inst.text} for ${Math.round(inst.time/60000)} minutes for ${Math.round(inst.distance*0.000621371)} miles` })}</li>
 </div>
 <button class="button--close2">Close Directions</button>

 `


}
export default DirectionList





