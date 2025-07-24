// src/pages/SearchWrapper.js
import React from 'react';
import SearchPage from './SearchPage';

function SearchWrapper({ query }) {
  return <SearchPage query={query} />;
}

export default SearchWrapper;
