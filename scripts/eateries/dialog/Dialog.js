export const DailogComponent = () => {
  const eventHub = document.querySelector(".container");

  eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("closeDialog--")) {
      const dialogElement = event.target.parentNode;
      dialogElement.close();
    }
  });

  eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("openDialog--")) {
      const dailogElement = document.querySelector(
        `#${event.target.id} + dialog`
      );
      dailogElement.showModal();
    }
  });
};
