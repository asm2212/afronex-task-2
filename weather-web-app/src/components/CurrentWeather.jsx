
import React, { useState, useEffect } from 'react';

function CurrentWeather() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
       
    }, []);

    return (
        <div className="text-white">
       
            {weatherData && (
                <>
                    <div>Temperature: {weatherData.temperature}°C</div>
                    <div>Humidity: {weatherData.humidity}%</div>
                    <div>Wind Speed: {weatherData.windSpeed} m/s</div>
                </>
            )}
        </div>
    );
}

export default CurrentWeather;
