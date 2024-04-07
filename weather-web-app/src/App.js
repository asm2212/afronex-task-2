// App.js
import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "./service/weather.js"; // Correct import path
import WeatherConditions from "./components/WeatherCondtions.jsx";// Correct import path
import Inputs from "./components/Inputs";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        // Get current weather based on user's location
        const data = await getCurrentWeather();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching current weather:", error);
      }
    };

    // Fetch current weather data on component mount
    fetchCurrentWeather();
  }, []);

  // Function to handle weather search by city name or ZIP code
  const handleSearch = async (searchQuery) => {
    try {
      // Get weather data for the entered location
      const data = await getCurrentWeather(searchQuery);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-33 bg-gradient-to-br from-cyan-600 to-blue-600 h-fit shadow-xl shadow-gray-400">
      <Inputs onSearch={handleSearch} />
      {weatherData && <WeatherConditions weather={weatherData} />}
    </div>
  );
}

export default App;
