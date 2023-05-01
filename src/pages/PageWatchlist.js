// WATCHLIST PAGE

import { getStorage } from "../utilities/localStorageUtils";


function PageWatchlist() {
    const addedMovies = getStorage("watchlistMovies");

    return(
        <main>
        <ul>
            {addedMovies.map((movie,) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
        </main>
    )
}

export default PageWatchlist
