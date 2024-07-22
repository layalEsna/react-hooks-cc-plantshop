// import React from "react";

// function NewPlantForm() {
//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form>
//         <input type="text" name="name" placeholder="Plant name" />
//         <input type="text" name="image" placeholder="Image URL" />
//         <input type="number" name="price" step="0.01" placeholder="Price" />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default NewPlantForm;
////OOOO

// import React from "react";

// function NewPlantForm({handleInputFields, handleSubmit}) {
//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form
//       onSubmit={handleSubmit}
//       >
//         <input onChange={ handleInputFields} type="text" name="name" placeholder="Plant name" />
//         <input onChange={ handleInputFields} type="text" name="image" placeholder="Image URL" />
//         <input onChange={ handleInputFields} type="number" name="price" step="0.01" placeholder="Price" />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default NewPlantForm;
// import React from "react";

// function NewPlantForm({ handleInputFields, handleSubmit }) {
//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form onSubmit={handleSubmit}>
//         <input onChange={handleInputFields} type="text" name="name" placeholder="Plant name" />
//         <input onChange={handleInputFields} type="text" name="image" placeholder="Image URL" />
//         <input onChange={handleInputFields} type="number" name="price" step="0.01" placeholder="Price" />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default NewPlantForm;
import React from "react";

function NewPlantForm({handleInputs, handleSubmit, newPlant}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newPlant.name} onChange={ handleInputs} placeholder="Plant name" />
        <input type="text" name="image" value={newPlant.image} onChange={ handleInputs} placeholder="Image URL" />
        <input type="number" name="price" value={newPlant.price }step="0.01" onChange={ handleInputs} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;