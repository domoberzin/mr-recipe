import React from 'react';

const SearchForm = ({ searchTerm, onSearchTermChange, onSearch }) => (

    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
   <form onSubmit={onSearch}>
    <input
      type="text"
      placeholder="Search for a recipe"
      value={searchTerm}
      className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      onChange={onSearchTermChange}
    />
    <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
 type="submit">Search</button>
  </form>
  </div>
);

export default SearchForm;
