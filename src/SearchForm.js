import React, { useState } from 'react';

function SearchForm({ handleSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(query);
  };

  return (
    <form onSubmit={submitForm} width="100%">
      <input type="text" value={query} onChange={handleChange} style={{width: "40%", height: "30px"}} />
      <button type="submit" style={{width: "100px", height: "35px"}}>Search</button>
    </form>
  );
}

export default SearchForm;
