import { useAttractions } from "./AttractionProvider.js"
import AttractionsComponent from "./attractions.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractions__preview")




export const AttractionsListComponent = () => {
  const attractionListCollection = useAttractions()

  // const renderDetailButton = attractions => {
  //   contentTarget.innerHTML = `
  //   <button id="detailButton">Details</button>

  //   `

  eventHub.addEventListener('attractionSelected', changeEvent => {

    const selectedAttraction = attractionListCollection.filter(attraction => {
      if (attraction.name === changeEvent.detail.location) {
        return attraction

      }
    }
    )
    render(selectedAttraction)
  })








  let render = attractionListCollection => {
    contentTarget.innerHTML = `
  ${attractionListCollection.map(location => { return AttractionsComponent(location) }).join(" ")}
  
  `



  }

}


