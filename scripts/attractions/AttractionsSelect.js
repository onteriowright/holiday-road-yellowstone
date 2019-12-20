import { useAttractions } from "./AttractionProvider.js"

const contentTarget = document.querySelector(".attractionsDropdown")
const eventHub = document.querySelector(".container")




const AttractionsSelect = () => {


  const attractions = useAttractions()

  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.classList.contains("dropdown")) {
      const selectedAttraction = changeEvent.target.value
      

      const message = new CustomEvent("attractionSelected", {

        detail: {
          location: selectedAttraction

        }

      })

      eventHub.dispatchEvent(message)

    }




  })



  const render = (collectedAttractions) => {

    contentTarget.innerHTML = `
            <select class="dropdown" id="attractionsSelect" class="saveButton">
    <option value="0">Please select a attraction...</option>
    
    
    
    ${collectedAttractions.sort().map(
      places => `<option value="${places.name}">${places.name}</option>`

    )}
    </select>`
  }

  render(attractions)

}

export default AttractionsSelect
