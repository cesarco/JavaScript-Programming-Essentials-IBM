const apiKey = '455ec025a089f9bf54bf8cfe6d9ddfe0'; // considera moverlo a backend

document.getElementById('weatherForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const city = document.getElementById('city').value.trim();
  const weatherInfo = document.getElementById('weatherInfo');
  if (!city) { weatherInfo.textContent = 'Ingresa una ciudad.'; return; }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=es`;

  try {
    weatherInfo.textContent = 'Buscando…';
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error('No se encontró la ciudad o hubo un error.');
    const data = await res.json();

    weatherInfo.innerHTML = `
      <h2>Clima en ${data.name}, ${data.sys?.country ?? ''}</h2>
      <p>Temperatura: ${Math.round(data.main.temp)} &#8451;</p>
      <p>Sensación térmica: ${Math.round(data.main.feels_like)} &#8451;</p>
      <p>Condición: ${data.weather[0].description}</p>
      <p>Humedad: ${data.main.humidity}% • Viento: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    weatherInfo.textContent = err.message || 'Error al obtener el clima.';
  }
});