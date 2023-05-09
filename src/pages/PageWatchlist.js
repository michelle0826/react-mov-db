import { getStorage } from "../utilities/localStorageUtils";
import MovieCard from "../components/MovieCard";
import AddToWatch from "../components/AddToWatch";

function PageWatchlist() {
    const addedMovies = getStorage("watchlistMovies");

    return(
        <main>
            <section className="watchlist">
                <h1>Your Watchlist</h1>
                <div className="movies-container">
                    {addedMovies.map((movie) => (
                    <MovieCard key={movie.id} movieObj={movie} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default PageWatchlist
