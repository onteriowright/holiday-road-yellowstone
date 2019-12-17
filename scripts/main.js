import AttractionsSelect from "./attractions/AttractionsSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { AttractionsListComponent } from "./attractions/AttractionsList.js"
import { LearnMoreButton } from "./attractions/LearnMore.js"

   

getAttractions().then(AttractionsSelect).then(AttractionsListComponent)
getAttractions().then(LearnMoreButton)



