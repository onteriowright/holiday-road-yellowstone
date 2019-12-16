import { EateryListcomponent } from "./eateries/EaterySelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import Settings from "./Settings.js";

getEateries().then(EateryListcomponent);
`${Settings.npsKey};`;
