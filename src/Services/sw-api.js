const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarship(idx) {
  const res = await fetch(`${baseUrl}/starships/${idx}`)
  return res.json()
}