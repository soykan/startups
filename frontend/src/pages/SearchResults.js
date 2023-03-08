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
      {searchResult.map((startup) => {
        return <h3>{startup.startupName}</h3>;
      })
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