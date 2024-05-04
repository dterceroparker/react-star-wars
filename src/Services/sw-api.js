const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  console.log(res)
  return res.json()
}

// export async function getStarship(url) {
//   // Extract the starship ID from the URL
//   const starshipId = url.match(/\d+/g)[0]
  
//   // Make API request to get starship details
//   const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch starship details')
//   }