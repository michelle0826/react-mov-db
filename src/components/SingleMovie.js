import noPoster from "../images/no-movie-poster.jpg";
import { getStorage } from "../utilities/localStorageUtils";
import AddToWatch from "./AddToWatch";
import { formatRating, formatDate } from "../globals/formatters";


function SingleMovie({ movieObj }) {
    const addedMovies = getStorage("watchlistMovies");

    //checking the api to access videos, pulling video if it is a youtube trailer 
    function findTrailer(){
        const videoData = movieObj.videos.results
        let key = null;
        for(let i = 0; i < videoData.length; i++){
            const currentVideo = videoData[i];
            
            if(currentVideo.site === "YouTube" && currentVideo.type === "Trailer"){
                key = currentVideo.key;
                break;
            }
        }
        return key; 
    }
    
    const key = findTrailer();


    return (
        <div className="single-movie">
            <div className="single-movie-backdrop"
                style={{
                    backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`
                }}>
            </div>
            <div className="single-movie-content">
                <div className="single-movie-poster">
                    {movieObj.poster_path === null ?
                        <img src={noPoster} alt="No poster" /> :
                        <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                    }
                </div>
                <div className="single-movie-info">
                    <AddToWatch movie={movieObj} addedMovies={addedMovies}/>
                    <p>Rating: {formatRating(movieObj.vote_average)}</p>
                    <h2>{movieObj.title}</h2>
                    <p>Release Date: {formatDate(movieObj.release_date)}</p>
                    <p>Genres: {movieObj.genres.map((genre, index) => (
                        <span key={genre.id}>
                            {genre.name}{index !== movieObj.genres.length - 1 && ', '}
                        </span>
                    ))}</p>
                    <p>Runtime: {movieObj.runtime} mins</p>
                    <p>{movieObj.overview}</p>
                    {key ? (
                    <iframe
                        width="420"
                        height="236.25"
                        src={`https://www.youtube.com/embed/${key}`}
                        title="Trailer"
                        allowFullScreen
                    ></iframe>) 
                    : (movieObj.backdrop_path ?(<img className="no-trailer" src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt={movieObj.title}/>) : null )}

                </div>
            </div>
        </div>
    )
}

export default SingleMovie