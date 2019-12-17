import AttractionsSelect from "./attractions/AttractionsSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js"

   

getAttractions().then(AttractionsSelect)

