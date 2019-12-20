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
import saveItineraryComponent from "./savedItinerary/savedItineraryList.js";
import { WeatherListComponent } from "./weather/weatherListComponent.js";

saveItineraryComponent();

getEateries()
  .then(EaterySelectListcomponent)
  .then(EateriesListComponent)
  .then(DialogComponent);

getParks()
  .then(() => parksSelect())
  .then(() => parkListComponent())
  .then(() => parkDialogEvents())
  .then(() => ParkLatLong())




getAttractions()
  .then(AttractionsSelect)
  .then(AttractionsListComponent)
  .then(LearnMoreButton);

WeatherListComponent();
