import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_TOKEN } from '../globals/auth';
import PageTitle from '../utilities/pageTitle';
import Banner from '../components/Banner';
import CategoryNav from '../components/CategoryNav';
import Movies from '../components/Movies';

function PageHome() {

  const { categoryName } = useParams();

  const setCategoryUrl = (categoryName) => {
    let categoryUrl;
    switch (categoryName) {
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

  const [movieData, setMovieData] = useState([]);
  const [catError, setCatError] = useState(null);

  useEffect(() => {

    const fetchMovies = async () => {

      const categoryUrl = setCategoryUrl(categoryName)

      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${categoryUrl}?language=en-US&page=1`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + API_TOKEN
          }
        });

        if (!res.ok) {
          setCatError('Sorry, an error occurred while retrieving category data');

        }
        else {
          let rawMovieData = await res.json();
          rawMovieData = rawMovieData.results.splice(0, 12);
          setMovieData(rawMovieData);
          setCatError(null);
        }

      }
      catch (catError) {
        setCatError('Sorry, an error occurred while retrieving category data');
      }
    }

  fetchMovies();

}, [categoryName])

return (
  <main>
    <PageTitle title="Home — Slate Movie Database" />
    <section className="home-page">
      <Banner />
      <CategoryNav />
      {catError && <h1>{catError}</h1>}
      <Movies movieData={movieData} />
    </section>
  </main>
)
}
export default PageHome