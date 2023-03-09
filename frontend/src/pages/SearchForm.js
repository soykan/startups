import * as React from 'react';
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = React.useState("");

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setSearchText(event.target.startupName.value);
  }

  React.useEffect(() => {
    if (searchText !== "") {
      const url = "search-results/" + searchText;
      try {
        navigate(url);
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchText, navigate]);

  return (
    <div>
      <form onSubmit={(event) => handleSearchFormSubmit(event)}>
        <input type="text" placeholder="startup name" name="startupName" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}





export default SearchForm;