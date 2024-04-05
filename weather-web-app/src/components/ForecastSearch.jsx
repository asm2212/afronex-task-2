// ForecastSearch.js
import React, { useState } from 'react';
import axios from 'axios';

function ForecastSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid={API_KEY}&units=metric`);
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
