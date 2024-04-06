/* import React, { useState } from 'react';
import axios from 'axios';
import WeatherIcons from './WeatherIcons';

function ForecastSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid={API key}`);
            setSearchResults([response.data]);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="text-white">
            {error && <div>Error: {error}</div>}
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Search</button>
            {searchResults.map((result) => (
                <div key={result.id}>
                    <div>City: {result.name}</div>
                    <div>Temperature: {result.main.temp}°C</div>
                    <div>Humidity: {result.main.humidity}%</div>
                    <div>Wind Speed: {result.wind.speed} m/s</div>
                    <WeatherIcons condition={result.weather[0].main} />
                </div>
            ))}
        </div>
    );
}

export default ForecastSearch; */