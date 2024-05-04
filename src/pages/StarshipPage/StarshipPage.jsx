//npm modules
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//services
import { getStarship } from '../../Services/sw-api';

//css
import './StarshipPage.css'

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { idx } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      // API CALL
      const starshipData = await getStarship(idx)
      // SET STATE
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [idx])

  if (!starshipDetails.name) return <h1 id='header'>Loading Ship...</h1>

  return ( 
    <>
      <h1 id='header'>Starships Details </h1>
    <div className="starship-details">
      {/* <h2>{starshipPage.name}</h2> */}

    </div>
    </>
  )
}

export default StarshipPage