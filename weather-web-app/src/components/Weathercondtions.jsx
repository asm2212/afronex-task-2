import React from "react";
import { formatToLocalTime,  getWeatherIcon } from "../service/weather.js"; 
import { UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'; 

function WeatherConditions({ weatherData }) {
  const {
    temperature,
    feelsLike,
    humidity,
    condition,
    icon,
    windSpeed,
    sunrise,
    sunset,
    timezone
  } = weatherData;

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{condition}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={getWeatherIcon(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temperature.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feelsLike.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${windSpeed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Sunrise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Sunset:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default WeatherConditions;
