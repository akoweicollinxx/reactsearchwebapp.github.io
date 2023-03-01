import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';



function App() {
  const [results, setResults] = useState([]);

  const handleSubmit = async (query) => {
    const apiKey = '5KXuMDGBhQYgdeRqwo6Gl21wFSl8qRo3bb6ZuGTO';
    const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;

    const response = await fetch(url);
    const data = await response.json();
    setResults(data.collection.items);
  };

  

  return (
    <div style={{textAlign: "center", marginTop: "170px"}}>
      <div>
      <img src="omologo.PNG" alt="" style={{width: "100px", height: "100px"}} />
      </div>
      <h1>NASA Media Library</h1>
      <SearchForm handleSubmit={handleSubmit} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
