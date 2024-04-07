import React, { useState, useEffect } from 'react';
import './Weather.css';
import clear_icon from '../Assets/clear.png';
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

const Weather = () => {
  const api_key = "29db2be289f2e6d790849910ca3bf6c8";
  const [weatherData, setWeatherData] = useState(null);
  const [wicon, setWicon] = useState(cloud_icon);

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const getCurrentLocationWeather = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;
          const response = await fetch(url);
          const data = await response.json();
          setWeatherData(data);
          setWeatherIcon(data.weather[0].icon);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      console.error("Error fetching current location weather:", error);
    }
  };

  const search = async (query) => {
    try {
      if (!query) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      setWeatherIcon(data.weather[0].icon);
    } catch (error) {
      console.error("Error searching weather:", error);
    }
  };

  const setWeatherIcon = (iconCode) => {
    if (iconCode === "01d" || iconCode === "01n") {
      setWicon(clear_icon);
    } else if (iconCode === "02d" || iconCode === "02n") {
      setWicon(cloud_icon);
    } else if (iconCode === "03d" || iconCode === "03n") {
      setWicon(drizzle_icon);
    } else if (iconCode === "04d" || iconCode === "04n") {
      setWicon(rain_icon);
    } else if (iconCode === "09d" || iconCode === "09n") {
      setWicon(rain_icon);
    } else if (iconCode === "10d" || iconCode === "10n") {
      setWicon(rain_icon);
    } else if (iconCode === "11d" || iconCode === "11n") {
      setWicon(rain_icon);
    } else if (iconCode === "13d" || iconCode === "13n") {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };

  return (
    <div className="weather-container">
      <div className='top-bar'>
        <input type='text' className='city-input' placeholder="Search for City name or ZIP code..." />
        <div className='search-icon' onClick={() => search(document.querySelector('.city-input').value)}>
          <img src={search_icon} className="search-icon" alt="Search Icon" />
        </div>
      </div>

      <div className='weather-image'>
        <img src={wicon} className="weather-icon" alt="Weather Icon" />
      </div>
      <div className='weather-temp'>{weatherData && `${Math.floor(weatherData.main.temp)}°C`}</div>
      <div className='weather-location'>{weatherData && weatherData.name}</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt='' className='icon' />
          <div className='data'>
            <div className='humidity-percent'>{weatherData && `${weatherData.main.humidity}%`}</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt='' className='icon' />
          <div className='data'>
            <div className='wind_rate'>{weatherData && `${Math.floor(weatherData.wind.speed)} km/h`}</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

