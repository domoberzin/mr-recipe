import React, { useState } from 'react';
import './MainPage.css';
import axios from "axios"
import { getCocktails } from './searchApi';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const resultsPerPage = 3;

  // const getCocktails = async (searchTerm) => {
    
  //   const apiKey = 'emqJZiaBOWlMBit9AFNBvQ==zeGsiSpgXfF4D6Zo';
    
  //   const ingredients = searchTerm.toString();
    
  //   await axios({
  //       method: 'GET',
  //       url: `https://api.api-ninjas.com/v1/cocktail?ingredients=${ingredients}`,
  //       headers: {
  //           'X-Api-Key': apiKey,
  //           'Content-Type': 'application/json'
  //       }
  //   }).then(response => {
  //       console.log("response", response);
  //       setSearchResults(response.data);
  //       return "Success"
  //   }).catch(error => {
  //       console.log(error);
  //   });
  // };

  const handleSearch = async (e) => {
    e.preventDefault();
    // Make API call to get search results based on searchTerm
    // Assume the API call returns an array of recipes
    const results = await getCocktails(searchTerm);
    setSearchResults(results);
    // setCurrentPage(1);
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
  console.log(typeof(searchResults));
  var test = searchResults[0] ? searchResults[0].ingredients : null;
  // console.log(searchResults[0].ingredients);

  return (
    <div className='main-page'>
      <h1>Welcome to Cocktail Central</h1>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search for a recipe'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <div className='search-results'>
        {/* {searchResults.map((recipe, index) => ()} */}
        {searchResults.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.name}</h2>
            <div 
              className={`ingredient-button ${ingredientsOpen ? 'open' : ''}`}
              onClick={() => setIngredientsOpen(!ingredientsOpen)}>
              <span className='arrow' />
              <span className='label'>Ingredients</span>
            </div>
            <div className={`ingredients ${ingredientsOpen ? 'open' : ''}`}>
              <ul>{recipe.ingredients.map(element => <li>{element}</li>)}</ul>
            </div>
            <div 
              className={`instructions-button ${instructionsOpen ? 'open' : ''}`}
              onClick={() => setInstructionsOpen(!instructionsOpen)}>
              <span className='arrow' />
              <span className='label'>Instructions</span>
            </div>
            <div className={`instructions ${instructionsOpen ? 'open' : ''}`}>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        ))}
      </div>


      {/* <div className='pagination'>
        <button
          className='pagination-button'
          disabled={currentPage === 1}
          onClick={() => handlePagination('prev')}
        >
          Prev
        </button>
        <span className='pagination-info'>
          Page {currentPage} of {Math.ceil(searchResults.length / resultsPerPage)}
        </span>
        <button
          className='pagination-button'
          disabled={currentPage === Math.ceil(searchResults.length / resultsPerPage)}
          onClick={() => handlePagination('next')}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default MainPage;
