import "./bootstrap/bootstrap.min.css";
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
    <SiteHeader />
    <SiteMainContent />
    <SiteFooter />
  </div>
) 


const SiteHeader = () => (
  <div>
    Site Header
    <Search />
  </div>
)


const SiteMainContent = () => {
  const [mainContent, setMainContent] = React.useState("<div name='mainContent'></div>");
  return (
    <main>
      Site Body
    </main>
  );
}


const SiteFooter = () => (
  <div>
    Site Footer
  </div>
)


const Search = () => {
  const [foundStartups, setFoundStartups] = React.useState([]);
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setFoundStartups(searchStartup(event.target.elements.startupName.value));
  } 

  const showStartup = false;

  return (
    <div>
      <form onSubmit={(event) => handleSearchFormSubmit(event)}>
        <input type="text" placeholder="startup name" name="startupName" />
        <input type="submit" value="Search" />
      </form>
      <div>
        {foundStartups.map((startup) => {
          return <SearchResults startup={startup} showStartup={showStartup} />
        })
        }
      </div>
    </div>
  )
}


const StartupDetails = (props) => {
  return (
    <div><h1>STARTUP NAME : {props.startup.startupName}</h1></div>
  )
}



const SearchResults = (props) => {
  const handleStartupNameOnClick = (event) => {
    event.preventDefault();
  }
  return (
    <div>
      <h3>
        <button type="button" className="btn btn-link" onClick={(event) => handleStartupNameOnClick(event)}>
          {props.startup.startupName}
        </button>
      </h3>
      <a href={props.startup.startupWebSite}>{props.startup.startupWebSite}</a>
    </div> 
  );
}



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
