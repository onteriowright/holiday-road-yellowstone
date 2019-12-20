import { useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".parksDropdown");

const parksSelect = () => {
  const parks = useParks();

  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parksDropdown") {
      const parkSelected = changeEvent.target.value;
      const message = new CustomEvent("parkSelected", {
        detail: {
          park: parkSelected
        }
      });
      eventHub.dispatchEvent(message);
    }
  });

  const render = parksCollection => {
    contentElement.innerHTML = `
    <select class="parksDropdownContent" id="parksDropdown">
      <option value="0">Select your National Park</option>
      ${parksCollection.map(
        individualPark =>
          `<option value="${individualPark.parkCode}">${individualPark.fullName}</option>`
      )}
    </select>
    `;
  };
  render(parks);
};
export default parksSelect;
