// npm modules
import { NavLink } from 'react-router-dom' 

//icon
import { SiStarship } from "react-icons/si"

import './NavBar.css'

const NavBar = () => {
  return ( 
    <header>
      <nav>
      <SiStarship className='icon'/>
        <NavLink to='/starships' >
        STAR WARS STARSHIPS
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar