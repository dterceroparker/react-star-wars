// npm modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// services
import { getAllStarships } from '../../Services/sw-api';

import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])
  console.log(starshipList)

  useEffect(() => {
    const fetchStarshipList = async () => { 
      //API call
      const starshipData = await getAllStarships()
      //Place data in state
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  
  if (!starshipList.length) return <h1>Loading starship list....</h1>

  return ( 
    <>
      <h1 id='header'>Starships Inventory </h1>
      <main className="starship-list">
        {starshipList.map((starship, idx) =>
          <div className="starship-card" key={idx}>
            <Link to={`/starships/${starship}`}> {starship.name}</Link>
          </div>
        )}
      </main>
    </>
  )
}

export default StarshipList