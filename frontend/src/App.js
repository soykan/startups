import './App.css';
import * as React from 'react';

const INFO_OF_STARTUPS = [
  {"startupName": "Getir", 
   "startupWebSite": "https://getir.uk"},

  {"startupName": "YemekSepeti", 
   "startupWebSite": "https://yemeksepeti.com"}
]

const App = () => (
  <div>
    <Search />
  </div>
) 





const Search = () => {
  const [foundStartups, setFoundStartups] = React.useState([]);
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setFoundStartups(searchStartup(event.target.elements.startupName.value));
  } 


  return (
    <div>
      <form onSubmit={(event) => handleSearchFormSubmit(event)}>
        <input type="text" placeholder="startup name" name="startupName" />
        <input type="submit" value="Search" />
      </form>
      <div>
        {foundStartups.map((startup) => {
          return <StartupDetailsInSearchResults startup={startup} />
        })
        }
      </div>
    </div>
  )
}


const StartupDetailsInSearchResults = (props) => (
  <div>
    <h3>{props.startup.startupName}</h3>
    <a href={props.startup.startupWebSite}>{props.startup.startupWebSite}</a>
  </div>
)


const searchStartup = (searchText) => {
  const allStartupInformations = INFO_OF_STARTUPS;
  let searchResult = allStartupInformations.filter((startupInformation) => {
    if (checkStringIncludesAnotherWithoutCaseSensitivity(startupInformation.startupName, searchText)) {
      return true;
    }
    return false;
  });
  return searchResult;
}


const checkStringIncludesAnotherWithoutCaseSensitivity = (mainString, searched) => {
  let mainStringLowerCased = getTurkishLowerCasedString(mainString);
  let searchStringLowerCased = getTurkishLowerCasedString(searched);
  return mainStringLowerCased.includes(searchStringLowerCased);
}


const getTurkishLowerCasedString = (text) => {
  return text.toLocaleLowerCase("tr");
}


export default App;
