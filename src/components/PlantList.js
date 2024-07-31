

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, isSoledOut,handleToggle}) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          isSoledOut={isSoledOut}
        handleToggle={handleToggle}
        />
      )) }
    </ul>
  );
}

export default PlantList;





// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList() {
//   return (
//     <ul className="cards">{/* render PlantCards components in here */}</ul>
//   );
// }

// export default PlantList;
//Original code