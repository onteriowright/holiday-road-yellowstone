
const eventHub = document.querySelector(".container")


export const DirectionsDialog = () => {
    eventHub.addEventListener("click", e => {
        if(e.target.id==="getDirections"){
        const dialogSiblingSelector = `#${e.target.id}+dialog`
        console.log(dialogSiblingSelector)
            const theDialog = document.querySelector(dialogSiblingSelector)
            console.log(theDialog)
            theDialog.showModal()
    }
    })
    
}   



//  "point": {
//                 "lng": -86.7743531,
//                 "lat": 36.1622296