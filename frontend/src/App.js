import "./bootstrap/bootstrap.min.css";
import './App.css';
import * as React from 'react';

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


const SiteMainContent = () => (
    <main>
      Site Body
    </main>
);



const SiteFooter = () => (
  <div>
    Site Footer
  </div>
)


const Search = () => {
  const [foundStartups, setFoundStartups] = React.useState([]);
  const [clickedStartupName, setClickedStartupName] = React.useState(null);
  const [searchOperation, setSearchOperation] = React.useState(true);
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setSearchOperation(true);
    setFoundStartups(searchStartup(event.target.elements.startupName.value));
  } 

  if (searchOperation) {
    return (
      <div>
        <SearchForm handleSearchFormSubmit={handleSearchFormSubmit} />
        <div>
          {foundStartups.map((startup) => {
            return <SearchResults startup={startup} setClickedStartupName={setClickedStartupName} setSearchOperation={setSearchOperation}/>
          })
          }
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SearchForm handleSearchFormSubmit={handleSearchFormSubmit} />
        <StartupDetails startup={clickedStartupName} />
      </div>
    );
  }

}

const SearchForm = (props) => (
  <form onSubmit={(event) => props.handleSearchFormSubmit(event)}>
    <input type="text" placeholder="startup name" name="startupName" />
    <input type="submit" value="Search" />
  </form>
)


const StartupDetails = (props) => {
  return (
    <div><h1>STARTUP NAME : {props.startup.startupName}</h1></div>
  )
}


const SearchResults = (props) => {
  const handleStartupNameOnClick = (event) => {
    event.preventDefault();
    props.setClickedStartupName(props.startup);
    props.setSearchOperation(false);
  }
  return (
    <div>
      <h3>
        <button type="button" startupObject={props.startup.startupName} className="btn btn-link" onClick={(event) => handleStartupNameOnClick(event)}>
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
