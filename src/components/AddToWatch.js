import { useState } from 'react';
import { setStorage, getStorage, removeMovieFromStorage } from '../utilities/localStorageUtils';
import { BsPlusCircle, BsPlusCircleFill } from 'react-icons/bs';

function AddToWatch(props) {
  const [watchlistMovies, setWatchlistMovies] = useState(getStorage('watchlistMovies'));

  function addToWatchlist(movie) {
    const updatedWatchlist = [...watchlistMovies, movie];
    setWatchlistMovies(updatedWatchlist);
    setStorage(updatedWatchlist, 'watchlistMovies');
  }
  
  // to remove the movie from the array once the add to watch button clicked again
  function removeFromWatchlist(index) {
    const updatedWatchlist = [...watchlistMovies];
    updatedWatchlist.splice(index, 1);
    setWatchlistMovies(updatedWatchlist);
    removeMovieFromStorage(index, 'watchlistMovies');
  }
  const isMovieAdded = watchlistMovies.some((addedMovie) => addedMovie.id === props.movie.id);
  const addedMovieIndex = watchlistMovies.findIndex((addedMovie) => addedMovie.id === props.movie.id);

  return (
    <button className="add-watchlist-btn" onClick={isMovieAdded ? () => removeFromWatchlist(addedMovieIndex) : () => addToWatchlist(props.movie)}>
      {isMovieAdded ? <BsPlusCircleFill /> : <BsPlusCircle/>}
    </button>
  );
}

export default AddToWatch