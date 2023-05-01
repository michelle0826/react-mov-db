import { NavLink } from 'react-router-dom';

const Nav = ({ showHideNav }) => {

    function closeNav(e) {
        if (window.innerWidth < 768){
            showHideNav();
        }else{
         e.target.blur();
        }
        
    }
    return (
        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Watchlist">Watchlist</NavLink></li>
                {/* <form>
                    <div className='search-container'>
                        <input type='search' id='search' />
                        <button type='submit'>Search</button>

                    </div>
                </form> */}
            </ul>
            


        </nav>
    )
}

export default Nav;