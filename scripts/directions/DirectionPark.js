import {useParks} from '../parks/ParkProvider.js'
//import park data (thid is where we are trying to navigate too)

const parkLocation = () => {
//create a function for directions

const parks = useParks()
//1.name parks data (taco,etc.)
//2.call parks data

const targetedPark=parks.data.map((idividualPark) => {
//1.name varible 
//2.pull data from api
//3.map through array
//4.name name this method
    return idividualPark.fullName
//1.return set name & (.) additinal info from the api
    
})
console.log(targetedPark)
//console.log given variable name
}

export default parkLocation
//1.export this function
//2.import into main