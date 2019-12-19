export const weatherComponent = location => {
  const temperatureConverter = valNum => {
    valNum = parseFloat(valNum);
    return (valNum = ((valNum - 273.15) * 9) / 5 + 32 - 10);
  };

  return `
    <section>
      <div>Weather: ${location.weather[0].main}</div>
      <div>Temperature: ${Math.round(
        temperatureConverter(location.main.temp)
      )} F</div>
      <div> Description: ${location.weather[0].description}</div>
    </section>
  `;
};
