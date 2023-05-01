import {useState} from 'react';
import { setStorage, getStorage } from '../utilities/localStorageUtils';

function AddToWatch(props) {
    const [watchlistMovies, setWatchlistMovies] = useState(props.addedMovies);

     
    function addToWatchlist(movie) {
        const updatedWatchlist = [...watchlistMovies, movie];
        setWatchlistMovies(updatedWatchlist);
        setStorage(updatedWatchlist, "watchlistMovies");
    }
    
    return (
        <button className="add-watchlist-btn" onClick={() => addToWatchlist(props.movie)}>
            Add to Watchlist
        </button>
    );
   
  }


export default AddToWatch;