// npm modules
import { Route, Routes } from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'

import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='starships' element={<StarshipList />} />
      </Routes>
    </>
  )
}

export default App
