// App.js
import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "./service/weather.js"; 
import WeatherConditions from "./components/WeatherCondtions.jsx";
import Inputs from "./components/Inputs";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
      
        const data = await getCurrentWeather();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching current weather:", error);
      }
    };

    fetchCurrentWeather();
  }, []);

  
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
      <Inputs onSearch={handleSearch} />
      {weatherData && <WeatherConditions weather={weatherData} />}
    </div>
  );
}

export default App;
