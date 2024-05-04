// npm modules
import { Route, Routes } from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar'


//pages
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'

//css
import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:starshipId' element={<StarshipPage />} />
      </Routes>
    </>
  )
}

export default App
