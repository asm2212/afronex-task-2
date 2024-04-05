
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrentWeather() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat={LATITUDE}&lon={LONGITUDE}&appid={API_KEY}&units=metric`);
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
                    <div>Temperature: {weatherData.main.temp}°C</div>
                    <div>Humidity: {weatherData.main.humidity}%</div>
                    <div>Wind Speed: {weatherData.wind.speed} m/s</div>
                </>
            )}
        </div>
    );
}

export default CurrentWeather;
