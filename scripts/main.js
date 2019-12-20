import { getEateries } from "./eateries/eateriesComponents/EateryDataProvider.js";
import { EaterySelectListcomponent } from "./eateries/eateriesComponents/EaterySelectComponent.js";
import { EateriesListComponent } from "./eateries/eateriesComponents/EateryListComponent.js";
import { DailogComponent } from "./eateries/dialog/Dialog.js";
import { getParks } from "./parks/ParkProvider.js";
import parksSelect from "./parks/ParkSelect.js";
import parkListComponent from "./parks/ParkList.js";
import parkDialogEvents from "./parks/ParkDialogs.js";
import AttractionsSelect from "./attractions/AttractionsSelect.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { AttractionsListComponent } from "./attractions/AttractionsList.js";
import { LearnMoreButton } from "./attractions/LearnMore.js";
import saveItineraryComponent from "./SavedItinerary/savedItineraryList.js";
// import { getWeather } from "./weather/WeatherProvider.js";
import {EnableButtonEvent} from "./SavedItinerary/enableButton.js"



saveItineraryComponent()

getEateries()
  .then(EaterySelectListcomponent).then(EnableButtonEvent)
  .then(EateriesListComponent)
  .then(DailogComponent)


getParks()
  .then(() => parksSelect()).then(EnableButtonEvent)
  .then(() => parkListComponent())
  .then(() => parkDialogEvents());

getAttractions()
  .then(AttractionsSelect)
  .then(AttractionsListComponent).then(EnableButtonEvent)


  
  
getAttractions().then(LearnMoreButton);

// getWeather()


