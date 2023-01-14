import React, { useState } from 'react';
import './styles/MainPage.css';
import './styles/pagination.css';
import { getCocktails, getFood } from './scripts/searchApi';
import Pagination from './components/Pagination';
import Recipes from './components/Recipes';
import SearchForm from './components/SearchForm';
import ApiTypeSelector from './components/ApiTypeSelector';


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
    setSearchTerm('');
    setSearchResults([]);
    setOpenedIngredients([]);
    setOpenedInstructions([]);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
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
      <SearchForm searchTerm={searchTerm} onSearchTermChange = {e => setSearchTerm(e.target.value)} onSearch={handleSearch} />
      <ApiTypeSelector apiType={apiType} onApiTypeChange={handleApiTypeChange} />
      <Recipes apiType={apiType} currentResults={currentResults} openedIngredients={openedIngredients} 
      openedInstructions={openedInstructions} handleIngredientClick={handleIngredientClick} handleInstructionClick={handleInstructionClick} />
      <Pagination totalResults={searchResults.length} resultsPerPage={resultsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default MainPage;
