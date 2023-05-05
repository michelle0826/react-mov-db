import Nav from './Nav';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Header() {
    const [navOpen, setNavOpen] = useState(false);

    function showHideNav() {
        setNavOpen(!navOpen);
    }

    function isDesktop(e) {
        if (e.matches) {
            setNavOpen(false);
        }
    }

    //not applying at desktop size, open class still gets applied

    useEffect(() => {
        let mediaQuery = window.matchMedia('(min-width:768px)');
        mediaQuery.addEventListener('change', isDesktop)
        //cleanup funciton to remove the listener 
        return () => {
            mediaQuery.removeEventListener('change', isDesktop)
        };
    }, [])

    return (
        <header className={navOpen ? 'open' : undefined}>
            <Link to="/"><h1>LOGO</h1></Link>
            <button className="nav-btn-container"
                onMouseDown={(e) => { e.preventDefault(); }}
                onClick={showHideNav}>
                <span className="hamburger-menu">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                {/* <span className="sr-only">Menu</span> */}
            </button>
            <Nav showHideNav={showHideNav} setNavOpen={setNavOpen} />
            
        </header>
    )
}

export default Header