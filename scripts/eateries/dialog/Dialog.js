export const DialogComponent = () => {
  const eventHub = document.querySelector(".container");

  eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("closeDialog--")) {
      const dialogElement = event.target.parentNode;
      dialogElement.close();
    }
  });

  eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("openDialog--")) {
      const dialogElement = document.querySelector(
        `#${event.target.id} + dialog`
      );
      dialogElement.showModal();
    }
  });
};
