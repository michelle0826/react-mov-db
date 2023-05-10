import { useState } from 'react';

import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import { formatDate, formatRating, formatTitle, formatOverview } from '../globals/formatters';
import { getStorage } from "../utilities/localStorageUtils";
import AddToWatch from './AddToWatch';

function MovieCard({ movieObj }) {

  //addedMovies is needed to keep track of what movies are added to the watchlist
  const addedMovies = getStorage("watchlistMovies");

  // to change the length of the overview depending on the image size
  const [posterSize, setPosterSize] = useState(0);
  const posterLoaded = (event) => {
    setPosterSize(event.target.width);
  }

  let maxLength = 80;
  if (posterSize >= 194) {
    maxLength = 160;
  }
  
  // format the overview
  const formatPosterOverview = formatOverview(movieObj.overview, maxLength);

  return (
    <article className='movie-card'>
      <div className='poster'>
            {movieObj.poster_path === null ?
                // true
                <img src={noPoster} alt={`No poster available for ${movieObj.title}`} /> :
                // false
                <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} onLoad={posterLoaded} />
            }
        </div>

        <div className='info'>
            <h1>{formatTitle(movieObj.title)}</h1>
            <div className='top-info'>
              <p className='rating'>{formatRating(movieObj.vote_average)}</p>
              <AddToWatch movie={movieObj} addedMovies={addedMovies}/>
            </div>
            <p className='date'>{formatDate(movieObj.release_date)}</p>
            <p className='overview'>{formatPosterOverview}</p>
            <Link className="button-link" to={`/movie/${movieObj.id}`}>More Info</Link>
        </div>
    </article>
  )
}

export default MovieCard