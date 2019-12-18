let weather =[]

export const getWeather = ()=> {
  return fetch (`api.openweathermap.org/data/2.5/forecast?zip=${matchingZip}&appid=${settings.weatherKey}`)
  .then(response =>response.json())
  .then(parsedWeather => {
    weather=parsedWeather
  })
}

export const useWeather = () => {
  return weather
}

