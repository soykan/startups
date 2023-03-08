import * as React from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  let { searchText } = useParams();
  return <h1>Search results: {searchText}</h1>;
};
  
  export default SearchResults;