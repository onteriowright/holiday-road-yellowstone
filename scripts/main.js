import { getEateries } from "./eateries/eateriesComponents/EateryDataProvider.js";
import { EaterySelectListcomponent } from "./eateries/eateriesComponents/EaterySelectComponent.js";
import { EateriesListComponent } from "./eateries/eateriesComponents/EateryListComponent.js";
import { SavedEateryListComponent } from "./eateries/eateriesComponents/EaterySavedListComponent.js";
import { DailogComponent } from "./eateries/dialog/Dialog.js";

getEateries()
  .then(EaterySelectListcomponent)
  .then(EateriesListComponent)
  .then(SavedEateryListComponent)
  .then(DailogComponent);
