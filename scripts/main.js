import { getParks } from "./parks/ParkProvider.js";
import parksSelect from "./parks/ParkSelect.js";
import parkListComponent from "./parks/ParkList.js";
import parkDialogEvents from "./parks/ParkDialogs.js";
import AttractionsSelect from "./attractions/AttractionsSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { AttractionsListComponent } from "./attractions/AttractionsList.js"
import { LearnMoreButton } from "./attractions/LearnMore.js"



getParks().then(
  () => parksSelect()
  ).then(
    ()=> parkListComponent()
    ).then(
      () =>parkDialogEvents()
    )
  

  
getAttractions().then(AttractionsSelect).then(AttractionsListComponent)
getAttractions().then(LearnMoreButton)



