import React from "react";

import Pet from "./Pet";

function PetBrowser({pets}) {
  const petData = pets.map(pet => {
    return <Pet key={pet.id} pet={pet}/>
  })

  return <div className="ui cards">{petData}</div>;
}

export default PetBrowser;
