
import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { API_TOKEN } from '../globals/auth';
// import NavSort from '../components/NavSort'
import Movies from '../components/Movies';

function PageHome({ sort = 'popular' }) {

  // For select options
  const { categoryName } = useParams();
  const navigate = useNavigate();


  const switchCategory = (e) => {
      const category = e.target.value;
      navigate(`/category/${category}`);
  };

  const [movieData, setMovieData] = useState([]);


  useEffect(() => {

    const fetchMovies = async () => {

      const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=1`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_TOKEN
        }
      });

      let rawMovieData = await res.json();
      
      rawMovieData = rawMovieData.results.splice(0, 12);
      
      console.log(rawMovieData);

      setMovieData(rawMovieData);

    }
    
    fetchMovies();

  }, [sort])



  return (
    <section className="home-page">
        {/* <NavSort /> */}
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
      <Movies movieData={movieData} />
    </section>
  )
}
export default PageHome