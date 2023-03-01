import React from 'react';

function SearchResults({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.data[0].nasa_id}>
          <h2>{result.data[0].title}</h2>
          <img src={result.links[0].href} alt={result.data[0].title} height="250" />
              <p>{result.data[0].location}</p>
              <p>{result.data[0].photographer}</p>
        </div>
        
      ))}
    </div>
  );
}

export default SearchResults;
