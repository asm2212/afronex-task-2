
import React, { useState } from 'react';

function ForecastSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Fetch weather forecast based on search query
        // Update searchResults state with fetched data
    };

    return (
        <div className="text-white">
            {/* Search input */}
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter city name or ZIP code"
            />
            <button onClick={handleSearch}>Search</button>

            {/* Display search results */}
            {searchResults.map((result) => (
                <div key={result.id}>{result.city}: {result.temperature}°C</div>
            ))}
        </div>
    );
}

export default ForecastSearch;
