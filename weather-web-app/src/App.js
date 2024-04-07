import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "./service/weather.js";
import Weatherconditions from './components/Weathercondtions.jsx';
import Inputs from "./components/Inputs"; // Correct import path

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch current weather based on user's location (default: Berlin)
    fetchWeather("Berlin");
  }, []);

  const fetchWeather = async (searchQuery) => {
    try {
      const data = await getCurrentWeather(searchQuery);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const handleSearch = async (searchQuery) => {
    try {
      const data = await getCurrentWeather(searchQuery);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-33 bg-gradient-to-br from-cyan-600 to-blue-600 h-fit shadow-xl shadow-gray-400">
      <Inputs onSearch={handleSearch} /> {/* Pass handleSearch function as prop */}
      {weatherData && <Weatherconditions weatherData={weatherData} />}
    </div>
  );
}

export default App;
