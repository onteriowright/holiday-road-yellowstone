import { useParkLatLong } from './LatLongProvider.js'

export const parkLatDirect = () => {
  const parkObject = useParkLatLong()
  console.log(parkObject)
  const parkLat = parkObject.hits.map(parkLat => {
    return parkLat.point
  })

  console.log(parkObject.hits, 'Hits')

  const parkLng = parkObject.hits.map(parkLng => {
    return parkLng.point
  })

  console.log(parkLng)
}
