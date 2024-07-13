// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList() {
//   return (
//     <ul className="cards">{/* render PlantCards components in here */}</ul>
//   );
// }

// export default PlantList;
//ooooooooooo



// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList({plants,  handleUpdateButton, update}) {
//   return (
//     <ul className="cards">
//       {plants.map(plant => (
//         <PlantCard
//           key={plant.id}
//           plant={plant}
         
//           handleUpdateButton={handleUpdateButton}
//           update={update[plant.id]}
//         />
//       ))}
//       {/* render PlantCards components in here */}</ul>
//   );
// }

//export default PlantList;


import React from "react";
import PlantCard from "./PlantCard";

// function PlantList({ plants, handleUpdateButton, update }) {
//   return (
//     <ul className="cards">
//       {plants.map((plant) => (
//         <PlantCard key={plant.id} plant={plant} handleUpdateButton={handleUpdateButton} update={update[plant.id]} />
//       ))}
//     </ul>
//   );
// }

// export default PlantList;
function PlantList({ plants, handleUpdateButton, update }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} handleUpdateButton={handleUpdateButton} update={update[plant.id]} />
      ))}
    </ul>
  );
}
export default PlantList;