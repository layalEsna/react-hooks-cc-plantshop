// import React from "react";

// function PlantCard() {
//   return (
//     <li className="card" data-testid="plant-item">
//       <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
//       <h4>{"plant name"}</h4>
//       <p>Price: {"plant price"}</p>
//       {true ? (
//         <button className="primary">In Stock</button>
//       ) : (
//         <button>Out of Stock</button>
//       )}
//     </li>
//   );
// }

// export default PlantCard;
//oooooo

// import React from "react";

// function PlantCard({plant, handleUpdateButton, update, handleSearch}) {
//   return (
//     <li
      
//     onClick={()=> handleUpdateButton(plant.id)}
//       className="card" data-testid="plant-item"
    
//     >
//       <img src={plant.image} alt={"plant name"} />
//       <h4>{plant.name}</h4>
//       <p>Price: {plant.price}</p>
//       {update ? (
//          <button
        
//           className="primary">In Stock</button>
//       ) : (
//         <button>Out of Stock</button>
//       )}
//     </li>
//   );
// }

// export default PlantCard;
// import React from "react";

// function PlantCard({ plant, handleUpdateButton, update }) {
//   return (
//     <li onClick={() => handleUpdateButton(plant.id)} className="card" data-testid="plant-item">
//       <img src={plant.image} alt={plant.name} />
//       <h4>{plant.name}</h4>
//       <p>Price: {plant.price}</p>
//       {update ? <button className="primary">In Stock</button> : <button>Out of Stock</button>}
//     </li>
//   );
// }

// export default PlantCard;


import React from "react";

function PlantCard({plant, isSoledOut,handleToggle}) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isSoledOut[plant.id] ? (
        <button className="primary" onClick={()=>handleToggle(plant.id)}>In Stock</button>
      ) : (
          <button onClick={()=>handleToggle(plant.id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
