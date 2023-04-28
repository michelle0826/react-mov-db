
import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { API_TOKEN } from '../globals/auth';
import Movies from '../components/Movies';

function PageHome() {

    // Sorting out the movies. Using useParam in case we end up with a select options menu so sorting should be working in both cases

   const { categoryName } = useParams();

   const setCategoryUrl = (categoryName) => {
    let categoryUrl;
    switch (categoryName){
      case 'popular':
        categoryUrl = 'popular';
        break;
      case 'top-rated':
        categoryUrl = 'top_rated';
        break;
      case 'now-playing':
        categoryUrl = 'now_playing';
        break;
      case 'upcoming':
        categoryUrl = 'upcoming';
        break;
      default:
        categoryUrl = 'popular';
    }
      
    return categoryUrl;

  }

  // For select options
  
  const navigate = useNavigate();

  const switchCategory = (e) => {
      const category = e.target.value;
      navigate(`/category/${category}`);
  };

  //Fetching movies

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {

    const fetchMovies = async () => {

      const categoryUrl = setCategoryUrl(categoryName)

      const res = await fetch(`https://api.themoviedb.org/3/movie/${categoryUrl}?language=en-US&page=1`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_TOKEN
        }
      });

      let rawMovieData = await res.json();
      
      rawMovieData = rawMovieData.results.splice(0, 12);
      
      

      setMovieData(rawMovieData);

    }
    
    fetchMovies();

  }, [categoryName])



  return (
    <section className="home-page">
        
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