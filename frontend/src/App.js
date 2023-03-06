import './App.css';
import * as React from 'react';

const infoOfStartups = [
  {"startupName": "Getir", 
  "startupWebSite": "https://getir.uk"},

  {"startupName": "YemekSepeti", 
  "startupWebSite": "https://yemeksepeti.com"}
]

function App() {
  return (
    <div>
      <Search />
    </div>
  );
}


const Search = () => {
  const [foundStartups, setFoundStartups] = React.useState([]);

  const searchStartups = (event) => {
    event.preventDefault();
    setFoundStartups(searchStartup(event.target.elements.startupName.value));
  } 

  return (
    <div>
      <form onSubmit={(event) => searchStartups(event)}>
        <input type="text" placeholder="startup name" name="startupName" />
        <input type="submit" value="Search" />
      </form>
    <div>
      {foundStartups.map((startup) => {
        return (
          <StartupDetails startup={startup} />
        )
      })}
    </div>
    </div>
  )
}


const StartupDetails = (props) => (
  <div>
    <h3>{props.startup.startupName}</h3>
    <a href={props.startup.startupWebSite}>{props.startup.startupWebSite}</a>
  </div>
)


const searchStartup = (startupName) => {
  let foundStartups = [];
  const allStartupInformations = infoOfStartups;
  for (let i=0; i<allStartupInformations.length; i++) {
    if (allStartupInformations[i].startupName.toLocaleLowerCase("tr").includes(startupName.toLocaleLowerCase("tr"))) {
      foundStartups.push(allStartupInformations[i]);
    }
  }
  return foundStartups;
}


export default App;
