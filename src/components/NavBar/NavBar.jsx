// npm modules
import { NavLink } from 'react-router-dom' 

import { SiStarship } from "react-icons/si"

import './NavBar.css'

const NavBar = () => {
  return ( 
    <header>
      <nav>
        <NavLink to='/starships' >
        STAR WARS SHIPS <SiStarship />
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar