import React from 'react';

const Pagination = ({ totalResults, resultsPerPage, currentPage, onPageChange }) => {
  const pageNumbers = [];
  console.log(totalResults)
  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => onPageChange(number)} className={`${currentPage == number ? 'selected' : ''}`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
