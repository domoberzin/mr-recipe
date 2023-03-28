import React, { useState } from 'react';
import './styles/MainPage.css';
import './styles/pagination.css';
import { getCocktails, getFood } from './scripts/searchApi';
import Pagination from './components/Pagination';
import Recipes from './components/Recipes';
import SearchForm from './components/SearchForm';
import ApiTypeSelector from './components/ApiTypeSelector';
import { FaCookieBite } from 'react-icons/fa';
import { GiChickenOven } from 'react-icons/gi'


const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openedIngredients, setOpenedIngredients] = useState([]);
  const [openedInstructions, setOpenedInstructions] = useState([]);
  const [apiType, setApiType] = useState('cocktails');
  const [searched, setSearched] = useState(false);
  const resultsPerPage = 3;

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
    setSearched(false);
    setSearchResults([]);
    setOpenedIngredients([]);
    setOpenedInstructions([]);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = apiType == 'cocktails' ? await getCocktails(searchTerm) : await getFood(searchTerm);
    setSearchResults(results);
    setSearched(true);
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
      <div className='grid grid-cols-3 absolute inset-0 gap-x-20' style={{backgroundColor:"blanchedalmond"}}>
        <FaCookieBite className='static text-indigo-600 justify-self-center self-center drop-shadow-2xl' size={140}/>
        <div className='pt-12 self-center justify-self-center pb-60'>
          <div className='grid grid-rows-2'>
            <span className="text-6xl font-extrabold text-indigo-600">Mr Recipe</span>
            <span className='text-3xl font-semibold text-indigo-400'>making recipe's easier</span>
          </div>
          <SearchForm searchTerm={searchTerm} onSearchTermChange = {e => setSearchTerm(e.target.value)} onSearch={handleSearch} />
          <ApiTypeSelector apiType={apiType} onApiTypeChange={handleApiTypeChange} />
          <Recipes searched={searched} apiType={apiType} currentResults={currentResults} openedIngredients={openedIngredients} 
          openedInstructions={openedInstructions} handleIngredientClick={handleIngredientClick} handleInstructionClick={handleInstructionClick} />
          <Pagination totalResults={searchResults.length} resultsPerPage={resultsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
        <GiChickenOven className='static text-indigo-600 justify-self-center self-center drop-shadow-2xl' size={140}/>
      </div>   
    </div>
      
  );
};

export default MainPage;
