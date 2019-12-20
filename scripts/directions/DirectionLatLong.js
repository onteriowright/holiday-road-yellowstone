import { useParkLatLong } from "./LatLongProvider.js";
import { getDirection } from "./DirectionProvider.js";


// take lat long arraY AND FIND THE LAT AND LONG TO PUT INTO OTHER url

const eventHub = document.querySelector(".container");

const LatLongVariables = (parkSelected) => {
  const parksLatLong = useParkLatLong();
  let parkLat = [];
    if (parksLatLong.hits.length > 1) {
    
      parkLat = parksLatLong.hits.find(element => element.name === parkSelected
      )
   
    } else {
      
      parkLat = parksLatLong.hits.map(individualPoint => {
        return individualPoint.point.lat;
      });
      console.log(parkLat)
    }
  const parkLong = parksLatLong.hits.map(individualPoint => {
    return individualPoint.point.lng;
  });
  console.log(parkLong)

 getDirection(parkLat[0],parkLong[0])


};
export default LatLongVariables;
 

// parkLong and parkLat are storing the array of long and lang 
// export this and access index 0