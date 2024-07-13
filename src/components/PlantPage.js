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
////ooooooo


// import React from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";

// function PlantPage({plants, handleInputFields, handleSubmit,  handleUpdateButton, update, handleSearch}
//  ) {
//   return (
//     <main>
//       <NewPlantForm
//         handleInputFields={handleInputFields}
//         handleSubmit={handleSubmit}
//       />
//       <Search
//         handleSearch={handleSearch}
       
//       />
//       <PlantList
//         plants={plants}
      
//         handleUpdateButton={handleUpdateButton}
//         update={update}
        
//       />
//     </main>
//   );
// }

// export default PlantPage;
import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleInputFields, handleSubmit, handleUpdateButton, update, handleSearch }) {
  return (
    <main>
      <NewPlantForm handleInputFields={handleInputFields} handleSubmit={handleSubmit} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={plants} handleUpdateButton={handleUpdateButton} update={update} />
    </main>
  );
}

export default PlantPage;
