import { getParks } from "./parks/ParkProvider.js";
import parksSelect from "./parks/ParkSelect.js";
import parkListComponent from "./parks/ParkList.js";
import parkDialogEvents from "./parks/ParkDialogs.js";


getParks().then(
  () => parksSelect()
  ).then(
    ()=> parkListComponent()
    ).then(
      () =>parkDialogEvents()
    )
  
