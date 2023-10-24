import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  formatDate,
  formatRating,
  formatTitle,
  formatOverview,
} from "../globals/formatters";
import noPoster from "../images/no-movie-poster.jpg";
import AddToWatch from "./AddToWatch";


function MovieCard({ movieObj, id }) {
  //addedMovies is needed to keep track of what movies are added to the watchlist
  //! const addedMovies = getStorage("watchlistMovies");

  // to change the length of the overview depending on the poster size
  const [isLarge, setIsLarge] = useState(false);
  
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setIsLarge(width >= 194);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  //add to watch
  // const [moviesToWatch, setMoviesToWatch] = useLocalStorage("movies", [])

//   const addMovieToWatch = () => {
//     const moviesToWatchJSON = localStorage.getItem('watchlist');
//     let moviesToWatch = [];

//     if (moviesToWatchJSON) {
//         moviesToWatch = JSON.parse(moviesToWatchJSON);
//     }

//     const updatedMovies = [...moviesToWatch, movieObj];
//     localStorage.setItem('watchlist', JSON.stringify(updatedMovies));
// }


  // format the overview
  const wordLimit = isLarge ? 160 : 80;
  const formatPosterOverview = formatOverview(movieObj.overview, wordLimit);

  return (
    <article ref={ref} className="movie-card">
      <div className="poster">
        {movieObj.poster_path === null ? (
          // true
          <img
            src={noPoster}
            alt={`No poster available for ${movieObj.title}`}
          />
        ) : (
          // false
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
            alt={movieObj.title}
          />
        )}
      </div>

      <div className="info">
        <h1>{formatTitle(movieObj.title)}</h1>
        <div className="top-info">
          <p className="rating">{formatRating(movieObj.vote_average)}</p>
          <AddToWatch movieObj={movieObj} id={id} />
        </div>
        <p className="date">{formatDate(movieObj.release_date)}</p>
        <p className="overview">{formatPosterOverview}</p>
        <Link className="button-link" to={`/movie/${movieObj.id}`}>
          More Info
        </Link>
      </div>
    </article>
  );
}

export default MovieCard;




