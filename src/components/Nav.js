import { NavLink } from 'react-router-dom';

const Nav = ({showHideNav}) => {
    function closeNav(e){
        e.target.blur();
        showHideNav();
    }
    return (
        <nav className="main-nav" onClick={closeNav}>
        <ul>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Watchlist">Watchlist</NavLink></li>
        </ul>
    </nav>
    )
}

export default Nav;