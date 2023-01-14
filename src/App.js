import React, { useState } from 'react';
import './MainPage.css';
import './pagination.css';
import { getCocktails, getFood } from './searchApi';
import Pagination from './Pagination';


const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openedIngredients, setOpenedIngredients] = useState([]);
  const [openedInstructions, setOpenedInstructions] = useState([]);
  const [apiType, setApiType] = useState('cocktails');
  const resultsPerPage = 5;

  const handleIngredientClick = (recipeIndex) => {
    if (openedIngredients.includes(recipeIndex)) {
      setOpenedIngredients(openedIngredients.filter(i => i !== recipeIndex));
    } else {
      setOpenedIngredients([...openedIngredients, recipeIndex]);
    }
  }

  const handleInstructionClick = (recipeIndex) => {
    if (openedInstructions.includes(recipeIndex)) {
      setOpenedInstructions(openedInstructions.filter(i => i !== recipeIndex));
    } else {
      setOpenedInstructions([...openedInstructions, recipeIndex]);
    }
  }

  const handleApiTypeChange = (e) => {
    setApiType(e.target.value);
    setSearchResults([]);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    // Make API call to get search results based on searchTerm
    // Assume the API call returns an array of recipes
    const results = apiType == 'cocktails' ? await getCocktails(searchTerm) : await getFood(searchTerm);
    setSearchResults(results);

  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setOpenedIngredients([]);
    setOpenedInstructions([]);
  }

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);


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
      <div className='api-type-selector'>
      <label>
        <input
          type='radio'
          name='api-type'
          value='cocktails'
          checked={apiType === 'cocktails'}
          onChange={handleApiTypeChange}
        /> Cocktails
      </label>
      <label>
        <input
          type='radio'
          name='api-type'
          value='food'
          checked={apiType === 'food'}
          onChange={handleApiTypeChange}
        /> Food
      </label>
    </div>
      <div className='search-results'>
        {/* {searchResults.map((recipe, index) => ()} */}
        {currentResults.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.name}</h2>
            <div 
              className={`ingredient-button ${openedIngredients.includes(index) ? 'open' : ''}`}
              onClick={() => handleIngredientClick(index)}>
              <span className='arrow' />
              <span className='label'>Ingredients</span>
            </div>
            <div className={`ingredients ${openedIngredients.includes(index) ? 'open' : ''}`}>
              <ul>{recipe.ingredients.map(element => <li>{element}</li>)}</ul>
            </div>
            <div 
              className={`instructions-button ${openedInstructions.includes(index) ? 'open' : ''}`}
              onClick={() => handleInstructionClick(index)}>
              <span className='arrow' />
              <span className='label'>Instructions</span>
            </div>
            <div className={`instructions ${openedInstructions.includes(index) ? 'open' : ''}`}>
              <p>{ apiType == 'cocktails' ? recipe.instructions : <a href={recipe.instructions}>Click here for instructions</a> }</p>
            </div>
          </div>
        ))}
      </div>
      {searchResults.length > 5 && (
        <Pagination 
          totalResults={searchResults.length}
          resultsPerPage={resultsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}


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
