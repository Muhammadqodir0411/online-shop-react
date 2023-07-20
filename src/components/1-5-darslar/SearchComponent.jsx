import React, { useState } from 'react';

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Qidiruv bilan bog'liq operatsiyalarni bajarish
    // Misol uchun, qidiruv natijalarini API orqali olish
    fetch(`https://api.example.com/search?q=${searchQuery}`)
      .then(response => response.json())
      .then(data => setSearchResults(data.results))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Qidirish</button>

      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;