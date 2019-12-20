import { useParkLatLong } from "./LatLongProvider.js";

const parkObject = useParkLatLong()

export const parkLatDirect = () => {
    console.log(parkObject)
  const parkLat=parkObject.hits.map(parkLat => {
    return parkLat.point
  })

  console.log(parkObject.hits, "Hits")

    const parkLng=parkObject.hits.map(parkLng => {
        return parkLng.point
    })

    console.log(parkLng)
}