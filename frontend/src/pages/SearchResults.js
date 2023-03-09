import * as React from 'react';
import { useParams } from 'react-router-dom';

const INFO_OF_STARTUPS = [
  {
    "startupId": 0,
    "startupName": "Getir", 
    "startupWebSite": "https://getir.uk"
  },

  {
    "startupId": 1,
    "startupName": "YemekSepeti", 
    "startupWebSite": "https://yemeksepeti.com"
  }
]


const SearchResults = () => {
  let { searchText } = useParams();
  const searchResult = searchStartup(searchText);
  
  return (
    <div>
      <h3>Search results here:</h3>
      {(searchResult.length !== 0) ? searchResult.map((startup) => {
        return (
          <a href={"/startup-details/" + startup.startupName}><h4>{startup.startupName}</h4></a>
        );
      }) : <h2>There is no search result related to your input..</h2>
      }
    </div>
  );
};


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


export default SearchResults;