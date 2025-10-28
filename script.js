async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = '9bf5ca8173975536d590b72c58c94a7d'; // Replace with your OpenWeatherMap API key

  if (!city) {
    document.getElementById('weatherInfo').innerHTML = '<p>Please enter a city name.</p>';
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Condition:</strong> ${data.weather[0].main}</p>
      <p><strong>Description:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById('weatherInfo').innerHTML = '<p>City not found. Please try again.</p>';
  }
}
