// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"


// services
import { getStarship } from "../../Services/sw-api"

import './StarshipPage.css'

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { idx } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      // API CALL
      const starshipData = await getStarship(idx)
      console.log(starshipData)
      // SET STATE
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [idx])

  if (!starshipDetails.name) return <h1 id="header" >Loading Ship...</h1>

  return (
    <>
      <h1 id="header">Starship Card</h1>
      <main className="starship-details">
        <h2>Name: {starshipDetails.name}</h2>
        <h3>Model: {starshipDetails.model}</h3>
        <h4>Crew: {starshipDetails.crew}</h4>
        <p>Passengers: {starshipDetails.passengers}</p>
        <link /><buttton></buttton>
        <NavLink to='/starships'><button className="back-btn">Back</button></NavLink>
      </main>
    </>
  )
}

export default StarshipPage