import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
const Nav = ({ showHideNav }) => {

    function closeNav(e) {
        if (window.innerWidth < 768){
            showHideNav();
        }else{
         e.target.blur();
        }
        
    }
    return (
        <nav className="main-nav" >
            <ul>
                <li onClick={closeNav}><NavLink to="/About">About</NavLink></li>
                <li onClick={closeNav}><NavLink to="/Watchlist">Watchlist</NavLink></li>
                <li> <SearchBar/></li>
            </ul>
        </nav>
               

        
    )
}

export default Nav;