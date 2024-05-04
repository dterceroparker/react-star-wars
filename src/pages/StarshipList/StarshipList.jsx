// npm modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// services
import { getAllStarships } from '../../Services/sw-api';

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
    <main className="starship-list">
      <h1>Starships!</h1>
      {starshipList.map((starship, idx) =>
        <div className="page-container" key={idx}>
          <Link style={{color: "white"}} to={`/starships/${starship}`}>{starship.name}</Link>
        </div>
      )}
    </main>
  )
}

export default StarshipList