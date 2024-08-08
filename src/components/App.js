// import React, {useState,useEffect} from "react";
// import Header from "./Header";
// import PlantPage from "./PlantPage";

// function App() {
//   const [plants, setPlants] = useState([])
//   const [newPlant, setNewPlant] = useState({
//     name: '',
//     image: '',
//     price: ''
//   })
//   const [isSoledOut, setSoldout] = useState({})
//   const [searchPlant, setSearchPlant] = useState('')
  
//   useEffect(() => {
//     fetch('http://localhost:6001/plants')
//       .then(res => res.json())
//       .then(data => {
//       setPlants(data)
//     })
//   }, [])

//   function handleSubmit(e) {
//     e.preventDefault()
//     fetch('http://localhost:6001/plants', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
        
//       },
//       body: JSON.stringify(newPlant)
//     })
//       .then(res=> res.json())
//       .then(data => {
//         setPlants(prev => [...prev, data])
//         setNewPlant({
//           name: '',
//     image: '',
//     price: ''
//         })
//       })
      
//     .catch(e=> console.error(e))
//   }

//   function handleInputs(e) {
//     const { name, value } = e.target
//     setNewPlant(prev => ({
//       ...prev, [name]: value
//     }))
//   }

//   function handleToggle(pId) {
//     setSoldout(prev => ({
//       ...prev, [pId]: !prev[pId]
//     }))
//   }
//   function handleSearch(name) {
//     setSearchPlant(name)
//   }
//   const newPlantList= plants.filter(plant=> plant.name.toLowerCase().includes(searchPlant.toLowerCase()))
//   return (
//     <div className="app">
//       <Header />
//       <PlantPage
//         plants={newPlantList}
//         handleInputs={handleInputs}
//         handleSubmit={handleSubmit}
//         newPlant={newPlant}
//         handleToggle={handleToggle}
//         isSoledOut={isSoledOut}
//         handleSearch={handleSearch}
//         searchPlant={searchPlant}
//       />
//     </div>
//   );
// }

// export default App;
// //final



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
// original Code


import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [newPlant, setNewPlant] = useState({
    name: '',
    image: '',
    price: ''
  })
  
  const [isSoledOut, setIsSoledOut] = useState({})
const [searchPlant, setSearchPlant] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res=> res.json())
      .then(data => {
        setPlants(data)
      })

    .catch(e=> console.error(e))
  }, [])

  function handleInputs(e) {
    const { name, value } = e.target
    setNewPlant(prev => ({
    ...prev, [name]: value
  }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then(res=> res.json())
      .then(() => {
        setPlants(prev => [...prev, newPlant])
        setNewPlant({
          name: '',
    image: '',
    price: ''
        })
      })
    .catch(e=> console.error(e))
  }
  function handleToggle(pId) {
    setIsSoledOut(prev => ({
  ...prev, [pId]:!prev[pId]
}))
  }
  function handelSearch(name) {
  setSearchPlant(name)
  }
  function handleEditPrice(pId) {
    const selectedPlant = plants.find(plant => plant.id === pId)
    if (selectedPlant)
      setNewPlant({
        name: selectedPlant.name,
        image: selectedPlant.image,
        price: searchPlant.price 
      })
    fetch(`http://localhost:6001/plants/${pId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: selectedPlant.price
      })
    })
      .then(res=> res.json())
      .then(updatedPlant => {
        setPlants(plants.map(plant=> plant.id === updatedPlant.id ? updatedPlant : plant) )
      })
    .catch(e=> console.error(e))
  }
  const newPlantList = plants.filter(plant => plant.name.toLowerCase().includes(searchPlant.toLowerCase()))
  function handleDelete(pId) {
    setPlants(plants.filter(plant=> plant.id !== pId))
  }
  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={newPlantList}
        handleInputs={handleInputs}
        handleSubmit={handleSubmit}
        newPlant={newPlant}
        handleToggle={handleToggle}
        isSoledOut={isSoledOut}
        handelSearch={handelSearch}
        searchPlant={searchPlant}
        handleEditPrice={handleEditPrice}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;