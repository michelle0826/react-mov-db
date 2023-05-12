import { getStorage } from "../utilities/localStorageUtils";
import MovieCard from "../components/MovieCard";


function PageWatchlist() {
    const addedMovies = getStorage("watchlistMovies");

    return (
        <main>
          <section className="watchlist">
            <h1>Your Watchlist</h1>
            {addedMovies && addedMovies.length > 0 ? (
              <div className="movies-container">
                {addedMovies.map((movie) => (
                  <MovieCard key={movie.id} movieObj={movie} />
                ))}
              </div>
            ) : (
              <p>Sorry, you have no favorited movies. Return to the home page to add a favorite movie.</p>
            )}
          </section>
        </main>
      );
}


export default PageWatchlist
