import * as React from 'react';

const SearchForm = () => (
    <form onSubmit={(event) => handleSearchFormSubmit(event)}>
      <input type="text" placeholder="startup name" name="startupName" />
      <input type="submit" value="Search" />
    </form>
)

const handleSearchFormSubmit = (event) => {
  // WILL BE IMPLEMENTED (get search text by using the event)
}



export default SearchForm;