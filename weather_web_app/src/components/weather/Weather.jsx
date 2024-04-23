import React, { useState, useEffect } from "react";
import "./Weather.css";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

const Weather = () => {
  const api_key = "29db2be289f2e6d790849910ca3bf6c8";
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

  const getCurrentLocationWeather = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;
          const response = await fetch(url);
          const data = await response.json();
          setWeatherData(data);
          setWeatherIcon(getWeatherIcon(data.weather[0].icon));
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      console.error("Error fetching current location weather:", error);
    }
  };

  useEffect(() => {
    getCurrentLocationWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = async (query) => {
    try {
      if (!query) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      setWeatherIcon(getWeatherIcon(data.weather[0].icon));
    } catch (error) {
      console.error("Error searching weather:", error);
    }
  };

  const getWeatherIcon = (iconCode) => {
    if (iconCode === "01d" || iconCode === "01n") {
      return clear_icon;
    } else if (
      iconCode === "02d" ||
      iconCode === "02n" ||
      iconCode === "03d" ||
      iconCode === "03n"
    ) {
      return cloud_icon;
    } else if (
      iconCode.startsWith("04") ||
      iconCode.startsWith("09") ||
      iconCode.startsWith("10") ||
      iconCode.startsWith("11")
    ) {
      return rain_icon;
    } else if (iconCode.startsWith("13")) {
      return snow_icon;
    } else {
      return clear_icon;
    }
  };

  const getWeatherClass = (iconCode) => {
    if (iconCode.startsWith("01")) {
      return "sunny";
    } else if (iconCode.startsWith("02") || iconCode.startsWith("03")) {
      return "cloudy";
    } else if (
      iconCode.startsWith("04") ||
      iconCode.startsWith("09") ||
      iconCode.startsWith("10") ||
      iconCode.startsWith("11")
    ) {
      return "rainy";
    } else {
      return "";
    }
  };

  return (
    <div
      className={`weather-container ${
        weatherData && weatherData.weather && weatherData.weather[0] && getWeatherClass(weatherData.weather[0].icon)
      }`}
    >
      <div className="top-bar">
        <input
          type="text"
          className="city-input"
          placeholder="Search for City name or ZIP code..."
        />
        <div
          className="search-icon"
          onClick={() => search(document.querySelector(".city-input").value)}
        >
          <img src={search_icon} className="search-icon" alt="Search Icon" />
        </div>
      </div>

      <div className="weather-image">
        <img src={weatherIcon} className="weather-icon" alt="Weather Icon" />
      </div>
      <div className="weather-temp">
        {weatherData && `${Math.floor(weatherData.main.temp)}°C`}
      </div>
      <div className="weather-location">{weatherData && weatherData.name}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="label">Humidity</div>
          <div className="value">
            {weatherData && `${weatherData.main.humidity}%`}
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="label">Wind</div>
          <div className="value">
            {weatherData && `${weatherData.wind.speed} m/s`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
