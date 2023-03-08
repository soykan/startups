import * as React from 'react';

const SearchForm = (props) => (
    <form onSubmit={(event) => props.handleSearchFormSubmit(event)}>
      <input type="text" placeholder="startup name" name="startupName" />
      <input type="submit" value="Search" />
    </form>
)

export default SearchForm;