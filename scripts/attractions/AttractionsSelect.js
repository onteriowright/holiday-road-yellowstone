import useAttractions from "./attractions/AttractionsSelect.js"

const contentTarget = document.querySelector('.attractionsDropdown')
const eventHub = document.querySelector(".container")

const AttractionsSelect = () => {
    const attractions = useAttractions()

// eventHub.addEventListener("change", changeEvent => {
//         if (changeEvent.target.id === "attractionsSelect") {
//             const selectedAttractions = changeEvent.target.value
//             const message = new CustomEvent("attractionsSelected", {
//                 detail: {
//                     attractions: selectedAttractions
//                 }
//             })
         
//             eventHub.dispatchEvent(message)
//         }
//     })   

// eventHub.addEventListener("change", changeEvent => {
//         if (changeEvent.target.classList.contains("dropDown")) {
//             const selectedAttractions = changeEvent.target.value

//             const message = new CustomEvent("attractionsSelected", {
//                 detail: {
//                     attractions: selectedAttractions
//                 }
//             })

//             eventHub.dispatchEvent(message)
//         }
//     })

    const render = attractionsCollection => {
    contentTarget.innerHTML = `
            <select class="dropDown" id="attractionsSelect">
    ${
                    attractions.map(attractions =>
                        `<option value="${attractions}">Attractions ${attractions}</option>`
                    )
                }
            </select>
        `
  }

  render()
}

export default AttractionsSelect
