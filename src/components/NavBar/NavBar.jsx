// npm modules
import { NavLink } from 'react-router-dom' 

import './NavBar.css'

const NavBar = () => {
  return ( 
    <header>
      <nav>
      {/* <SiStarship /> */}
        <NavLink to='/starships'>
        STAR WARS STARSHIPS
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar