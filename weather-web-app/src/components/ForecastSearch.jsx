// ForecastSearch.js
import React, { useState } from 'react';
import axios from 'axios';

function ForecastSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}`);
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
                <div key={result.id}>{result.name}: {result.main.temp}°C</div>
            ))}
        </div>
    );
}

export default ForecastSearch;
