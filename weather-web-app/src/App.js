import './App.css';
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Weatherconditions from "./components/Weathercondtions.jsx";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./service/weather.js";

function App() {
  const [query, setQuery] = useState({ q: "berlin" }); // Default query for Berlin
  const [units, setUnits] = useState("metric"); // Default units
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);

      try {
        const data = await getFormattedWeatherData({ ...query, units });
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`);
        setWeather(data);
      } catch (error) {
        toast.error("Failed to fetch weather data.");
      }
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  };

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-3 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400`}>
      {/* <TopButtons setQuery={setQuery} /> */}
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation  />
          <Weatherconditions weather={weather} />
          <Forecast title="Hourly Forecast" items={weather.hourly} />
          <Forecast title="Daily Forecast" items={weather.daily} />
          {/* <TimeAndLocation weather={weather} />
          <Weatherconditions weather={weather} />

          <Forecast title="Hourly Forecast" items={weather.hourly} />
          <Forecast title="Daily Forecast" items={weather.daily} /> */}
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
