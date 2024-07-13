// import React from "react";
// import Header from "./Header";
// import PlantPage from "./PlantPage";

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <PlantPage />
//     </div>
//   );
// }

// export default App;
//original Code


import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [newPlant, setNewPlant] = useState({
    name: '',
    image: '',
    price: ''
  })
  const [update, setUpdate] = useState('In Stock')
  const [searchPlants, setSearch] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => {
        setPlants(data)
        setSearch(data)




      })
      .catch(e => console.error(e))
  }, [])
  
  



  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(data => {
        setPlants([...plants, data])
        
          setSearch([...plants, data])
      
        
        setNewPlant({name: '',
        image: '',
          price: ''
        })
        


      })
    .catch(e=> console.error(e))
  }

  function handleInputFields(e) {
    const { name, value } = e.target
    setNewPlant(prev => ({
      ...prev, [name]: value
    }))
  }

  // function handleDelete(pId) {
  //   fetch(`http://localhost:6001/plants/${pId}`, {
  //     method: 'DELETE'

  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         const deletedPlant = plants.filter(plant => plant.id !== pId)
  //         setPlants(deletedPlant)
  //     }
  //     })
  //   .catch(e => console.error(e))
  // }

  function handleUpdateButton(pId) {
    setUpdate(prev => ({
...prev, [pId]: !prev[pId]
    }))
  }

//   function handleSearch(name) {
//     const searchByName = plants.filter(plant => plant.name.toLowerCase().includes(name.toLowerCase()))
// setSearch(searchByName)
    
  //}

  function handleSearch(name) {
    const searchByName = plants.filter(plant => plant.name.toLowerCase().includes(name.toLowerCase()));
    setSearch(searchByName);
  }
  
  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={searchPlants}
        handleInputFields={handleInputFields}
        handleSubmit={handleSubmit}
        //handleDelete={handleDelete}
        handleUpdateButton={handleUpdateButton}
        update={update}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;

