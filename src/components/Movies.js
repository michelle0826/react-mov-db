import MovieCard from './MovieCard';

function Movies({ movieData , results}) {

  return (
    <div className='movies-container'>
        {movieData ? movieData.map((oneMovie) => <MovieCard key={oneMovie.id} movieObj={oneMovie}/>): results.map((oneMovie) => <MovieCard key={oneMovie.id} movieObj={oneMovie} />) }
    </div>
  )
}

export default Movies; 