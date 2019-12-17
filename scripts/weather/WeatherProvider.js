let weather =[]

export const getWeather = ()=> {
  return fetch ("")
  .then(response =>response.json())
  .then(parsedWeather => {
    weather=parsedWeather
  })
}

export const useWeather = () => {
  return weather
}

