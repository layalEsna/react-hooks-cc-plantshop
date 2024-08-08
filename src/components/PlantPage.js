
// import React from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";

// function PlantPage({plants, handleInputs, handleSubmit, newPlant,handleToggle,
//   isSoledOut, handleSearch, searchPlant}) {
//   return (
//     <main>
//       <NewPlantForm
//         newPlant={newPlant}
//         handleInputs={handleInputs}
//         handleSubmit={handleSubmit}
//       />
//       <Search
//         handleSearch={handleSearch}
//         searchPlant={searchPlant}
        
//       />
//       <PlantList
//         plants={plants}
//         isSoledOut={isSoledOut}
//         handleToggle={handleToggle}
//       />
//     </main>
//   );
// }

// export default PlantPage;
/////final



// import React from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";

// function PlantPage() {
//   return (
//     <main>
//       <NewPlantForm />
//       <Search />
//       <PlantList />
//     </main>
//   );
// }

// export default PlantPage;
////Original code




import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, newPlant, handleInputs, handleSubmit, handleToggle,isSoledOut,  handelSearch, searchPlant, handleEditPrice, handleDelete}) {
  return (
    <main>
      <NewPlantForm
      handleInputs={handleInputs}
      handleSubmit={handleSubmit}
        newPlant={newPlant}
      />
      <Search
        handelSearch={handelSearch}
        searchPlant={searchPlant}
      />
      <PlantList
        plants={plants}
        handleToggle={handleToggle}
        isSoledOut={isSoledOut}
        handleEditPrice={handleEditPrice}
        handleDelete={handleDelete}
        />
    </main>
  );
}

export default PlantPage;

