import MovieCard from './MovieCard';

function Movies({ movieData}) {
  return (
    <div className='movies-container'>
        {movieData.map((oneMovie) => <MovieCard key={oneMovie.id} movieObj={oneMovie}/>)}
    </div>
  )
}

export default Movies; 