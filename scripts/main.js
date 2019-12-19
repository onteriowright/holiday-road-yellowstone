import { getEateries } from "./eateries/eateriesComponents/EateryDataProvider.js";
import { EaterySelectListcomponent } from "./eateries/eateriesComponents/EaterySelectComponent.js";
import { EateriesListComponent } from "./eateries/eateriesComponents/EateryListComponent.js";
import { DialogComponent } from "./eateries/dialog/Dialog.js";
import { getParks } from "./parks/ParkProvider.js";
import parksSelect from "./parks/ParkSelect.js";
import parkListComponent from "./parks/ParkList.js";
import parkDialogEvents from "./parks/ParkDialogs.js";
import AttractionsSelect from "./attractions/AttractionsSelect.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { AttractionsListComponent } from "./attractions/AttractionsList.js";
import { LearnMoreButton } from "./attractions/LearnMore.js";
import saveItineraryComponent from "./SavedItinerary/savedItineraryList.js";
<<<<<<< HEAD
import {DirectionsDialog} from './directions/DirectionsDialog.js'
import parkLocation from './directions/DirectionPark.js'
=======
import directionDialog from "./directions/DirectionDialog.js";
import { ParkLatLong } from "./directions/DirectionPark.js";
>>>>>>> nm-yellowstone

directionDialog()
saveItineraryComponent()

getEateries()
  .then(EaterySelectListcomponent)
  .then(EateriesListComponent)
  .then(DialogComponent)


getParks()
  .then(() => parksSelect())
  .then(() => parkListComponent())
  .then(() => parkDialogEvents())
<<<<<<< HEAD
  .then(() => parkLocation());
=======
  .then(() => ParkLatLong())
  


>>>>>>> nm-yellowstone

getAttractions()
  .then(AttractionsSelect)
  .then(AttractionsListComponent);
  
getAttractions().then(LearnMoreButton);

DirectionsDialog()



