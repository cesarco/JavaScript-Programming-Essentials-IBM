const apiKey = "455ec025a089f9bf54bf8cfe6d9ddfe0"; // tu API key

document.getElementById("weatherForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const lat = document.getElementById("lat").value.trim();
  const lon = document.getElementById("lon").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  if (!lat || !lon) {
    weatherInfo.textContent = "Por favor ingresa valores de latitud y longitud.";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

  try {
    weatherInfo.textContent = "Buscando…";
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("No se pudo obtener el clima.");
    const data = await res.json();

    weatherInfo.innerHTML = `
      <h2>Clima en ${data.name || "Coordenadas ingresadas"} (${lat}, ${lon})</h2>
      <p>Temperatura: ${Math.round(data.main.temp)} &#8451;</p>
      <p>Sensación térmica: ${Math.round(data.main.feels_like)} &#8451;</p>
      <p>Condición: ${data.weather[0].description}</p>
      <p>Humedad: ${data.main.humidity}% • Viento: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    weatherInfo.textContent = err.message || "Error al obtener el clima.";
  }
});