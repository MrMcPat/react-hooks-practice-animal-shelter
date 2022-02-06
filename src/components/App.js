import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChangeType (petType) {
    setFilters({type: petType})
  }

  const URL= filters.type === "all" ? `http://localhost:3001/pets` : `http://localhost:3001/pets?type=${filters.type}`

  useEffect(() => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => setPets(data))
  }, [filters.type])

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
