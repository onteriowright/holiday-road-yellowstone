import Settings from '../../Settings.js'

let directions =[]

export const getDirections = ()=> {
  return fetch (`${Settings.graphhopperKey}`)
  .then(response =>response.json())
  .then(parsedDirections => {
    directions=parsedDirections
  })
}

export const useDirections = () => {
  return directions
}

