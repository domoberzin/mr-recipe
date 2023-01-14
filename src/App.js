import React, { useState } from 'react';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 3;

  const handleSearch = async (e) => {
    e.preventDefault();
    // Make API call to get search results based on searchTerm
    // Assume the API call returns an array of recipes
    // const results = await yourApiCallFunction(searchTerm);
    const results = [];
    setSearchResults(results);
    setCurrentPage(1);
  }

  const handlePagination = (direction) => {
    if (direction === 'prev') {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentResults = searchResults.slice(startIndex, endIndex);

  return (
    <div className='flex-auto'>
      <h1 className='text-6xl font-bold text-center'>Welcome to Cocktail Central</h1>
      <form onSubmit={handleSearch}>
        <input
          className='justify-center'
          type='text'
          placeholder='Search for a recipe'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div>
        {currentResults.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.name}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination('prev')}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {Math.ceil(searchResults.length / resultsPerPage)}
        </span>
        <button
          disabled={currentPage === Math.ceil(searchResults.length / resultsPerPage)}
          onClick={() => handlePagination('next')}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MainPage;
