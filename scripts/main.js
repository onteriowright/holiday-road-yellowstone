import AttractionsSelect from "./attractions/AttractionsSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import {AttractionsListComponent} from './attractions/AttractionsList.js'

getAttractions().then(AttractionsSelect)
