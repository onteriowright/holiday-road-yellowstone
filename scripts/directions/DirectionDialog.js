

const eventHub= document.querySelector(".container")

const directionDialog  = () => {

  eventHub.addEventListener("click", e =>{
    if(e.target.id==="getDirections"){
      const dialogSiblingSelector = `#${e.target.id}+dialog`
    console.log(dialogSiblingSelector)
            const theDialog = document.querySelector(dialogSiblingSelector)
           console.log(theDialog)
            theDialog.showModal()
    }if(e.target.classList.contains("button--close2")){
      const dialogElement =e.target.parentNode
      dialogElement.close()
    }
  })

}

export default directionDialog