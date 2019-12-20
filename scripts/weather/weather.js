export const weatherComponent = location => {
  const temperatureConverter = valNum => {
    valNum = parseFloat(valNum);
    return (valNum = ((valNum - 273.15) * 9) / 5 + 32);
  };

  return `
    <section class="weather-cards">
      <div class="weather-info">Weather: ${location.weather[0].main}</div>
      <div class="weather-info">Temperature: ${Math.round(
        temperatureConverter(location.main.temp)
      )} F</div>
      <div class="weather-info"> Description: ${
        location.weather[0].description
      }</div>
    </section>
  `;
};
