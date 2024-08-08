

// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList({plants, isSoledOut,handleToggle}) {
//   return (
//     <ul className="cards">
//       {plants.map(plant => (
//         <PlantCard
//           key={plant.id}
//           plant={plant}
//           isSoledOut={isSoledOut}
//         handleToggle={handleToggle}
//         />
//       )) }
//     </ul>
//   );
// }

// export default PlantList;
/////final





// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList() {
//   return (
//     <ul className="cards">{/* render PlantCards components in here */}</ul>
//   );
// }

// export default PlantList;
//Original code


import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleToggle, isSoledOut, handleEditPrice, handleDelete}) {
  return (
    <ul className="cards">{plants.map(plant => (
      <PlantCard
        key={plant.id}
        plant={plant}
        handleToggle={handleToggle}
        isSoledOut={isSoledOut}
        handleEditPrice={handleEditPrice}
        handleDelete={handleDelete}/>
    
    ))}</ul>
  );
}

export default PlantList;



