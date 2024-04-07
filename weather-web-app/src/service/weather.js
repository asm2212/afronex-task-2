// // service/weatherService.js
import { DateTime } from "luxon";



const mockWeatherData = {
  temperature: 20,
  feelsLike: 18,
  humidity: 60,
  condition: "Sunny",
  icon: "01d",
  windSpeed: 10,
  sunrise: 1619992200,
  sunset: 1619996400,
  timezone: "Europe/Berlin"
};


export const getCurrentWeather = async (searchQuery) => {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockWeatherData);
    }, 1000); 
  });
};

export const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


export const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;


export const getWeatherIcon = (icon) => iconUrlFromCode(icon);
