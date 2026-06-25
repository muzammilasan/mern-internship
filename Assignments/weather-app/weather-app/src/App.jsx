import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found. Please try again.");
      }

      const { latitude, longitude, name } = geoData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
      );
      const weatherData = await weatherResponse.json();

      setWeather({
        city: name,
        temperature: weatherData.current.temperature_2m,
        windSpeed: weatherData.current.wind_speed_10m,
        time: weatherData.current.time,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Weather Search</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "10px", flex: 1 }}
        />
        <button onClick={getWeather} style={{ padding: "10px 15px", cursor: "pointer" }}>
          Search
        </button>
      </div>

      {loading && <p>Loading data...</p>}

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {weather && !loading && !error && (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
          <h3 style={{ marginTop: 0 }}>{weather.city}</h3>
          <p><strong>Temperature:</strong> {weather.temperature} °C</p>
          <p><strong>Wind Speed:</strong> {weather.windSpeed} km/h</p>
          <p><strong>Time of Observation:</strong> {new Date(weather.time).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default App
