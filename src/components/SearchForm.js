import React from 'react';

const SearchForm = ({ searchTerm, onSearchTermChange, onSearch }) => (


   <form onSubmit={onSearch}>
    <input
      type="text"
      placeholder="Search for a recipe"
      value={searchTerm}
      onChange={onSearchTermChange}
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchForm;
