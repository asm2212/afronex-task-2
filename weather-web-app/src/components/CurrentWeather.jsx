/* 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherIcons from './WeatherIcons';

function CurrentWeather() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`);
                setWeatherData(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div className="text-white">
            {error && <div>Error: {error}</div>}
            {weatherData && (
                <>
                    <div>City: {weatherData.name}</div>
                    <div>Temperature: {weatherData.main.temp}°C</div>
                    <div>Humidity: {weatherData.main.humidity}%</div>
                    <div>Wind Speed: {weatherData.wind.speed} m/s</div>
                    <WeatherIcons condition={weatherData.weather[0].main} />
                </>
            )}
        </div>
    );
}

export default CurrentWeather; */