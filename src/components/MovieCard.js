import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function MovieCard({ movieObj }) {
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            {movieObj.poster_path === null ?
                // true
                <img src={noPoster} alt="No poster available" /> :
                // false
                <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
            }
        </div>

        <div className='movie'>
            <h3>{movieObj.title}</h3>
            {/* add other props here*/}
            <Link classname="button-link" to={`/movie/${movieObj.id}`}>More Info</Link>
        </div>

    </div>
  )
}

export default MovieCard