const parkDialogEvents = () => {
  const eventHub = document.querySelector(".container");

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("parks--")) {
      const dialogSiblingSelector = `#${clickEvent.target.id}+dialog`;
      console.log(dialogSiblingSelector);
      const theDialog = document.querySelector(dialogSiblingSelector);
      console.log(theDialog);
      theDialog.showModal();
    }
    if (clickEvent.target.id.startsWith("close--")) {
      const dialogElement = clickEvent.target.parentNode;

      dialogElement.close();
    }
  });
};

export default parkDialogEvents;
