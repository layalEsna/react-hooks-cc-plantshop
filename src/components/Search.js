// import React from "react";

// function Search() {
//   return (
//     <div className="searchbar">
//       <label htmlFor="search">Search Plants:</label>
//       <input
//         type="text"
//         id="search"
//         placeholder="Type a name to search..."
//         onChange={(e) => console.log("Searching...")}
//       />
//     </div>
//   );
// }

// export default Search;
//////ooooooo





// import React from "react";

// function Search({ handleSearch, searchPlant}) {
//   return (
//     <div className="searchbar">
//       <label htmlFor="search">Search Plants:</label>
//       <input
//         type="text"
//         value={searchPlant}
//         id="search"
//         placeholder="Type a name to search..."
//         onChange={(e) => handleSearch(e.target.value)}
//       />
//     </div>
//   );
// }

// export default Search;
////final

import React from "react";

function Search({ handelSearch, searchPlant}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchPlant}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handelSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
