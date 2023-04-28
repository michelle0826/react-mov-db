// HOME PAGE


import { NavLink, useParams, useNavigate } from 'react-router-dom';

function PageHome() {
    
    // For select options
    const { categoryName } = useParams();
    const navigate = useNavigate();

 
    const switchCategory = (e) => {
        const category = e.target.value;
        navigate(`/category/${category}`);
    };

      

    return (
        <main>
            <section>
                <h1>This is the Home Page.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro, dolorem, quod facere enim voluptate provident quo labore vero repellat nemo animi ad exercitationem rem quos, possimus libero deleniti laudantium?</p>
            </section>
            <nav className='category-select'>
                <label htmlFor="browse-by">Browse By</label>
                <select name="category-list" id="category-list" value={categoryName} onChange={switchCategory}>
            
                    <option value="popular">Popular</option>
                    <option value="top-rated">Top Rated</option>
                    <option value="now-playing">Now Playing</option>
                    <option value="upcoming">Upcoming</option>

                </select>

                <ul>
                    <li><NavLink to={"/category/popular"}>Popular</NavLink></li>
                    <li><NavLink to={"/category/top-rated"}>Top Rated</NavLink></li>
                    <li><NavLink to={"/category/now-playing"}>Now Playing</NavLink></li>
                    <li><NavLink to={"/category/upcoming"} >Upcoming</NavLink></li>
                </ul>
            </nav>

            {/* <nav className="category-select">
                
            </nav> */}

                       
        
        </main>
        
    );

};

export default PageHome;