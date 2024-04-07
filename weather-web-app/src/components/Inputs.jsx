// Inputs.js
import React, { useState } from "react";

function Inputs({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="flex flex-row justify-center my-5">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter city name or ZIP code..."
        className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Inputs;
