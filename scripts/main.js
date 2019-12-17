import { EateryListcomponent } from "./eateries/EaterySelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import { EateriesListComponent } from "./eateries/EateriesList.js";

getEateries().then(EateryListcomponent);
getEateries().then(EateriesListComponent)