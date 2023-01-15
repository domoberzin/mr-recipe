import React from 'react';

const SearchForm = ({ searchTerm, onSearchTermChange, onSearch }) => (

  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <form className='grid grid-rows-2 gap-y-4' onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Search for a recipe"
        value={searchTerm}
        className="border-2 border-indigo-600 pl-7 pr-12 sm:text-sm w-full rounded-md text-indigo-600 font-semibold hover:border-4 active:border-4 active:border-green-500 hover:border-green-500 hover:outline-0"
        onChange={onSearchTermChange}
      />
      <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 ease-in delay-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 hover:scale-105"
  type="submit">Search</button>
  </form>
  </div>
);

export default SearchForm;
