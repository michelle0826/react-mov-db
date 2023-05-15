// SINGLE MOVIE PAGE
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_TOKEN } from '../globals/auth';
import SingleMovie from '../components/SingleMovie';

function PageSingleMovie() {

    const [movieData, setMovieData] = useState(null);
    const { id } = useParams();

    //FETCHING SINGLE MOVIE DATA FROM ID RETREIVED BY useParams
    useEffect (() => {
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=videos`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });

            let rawMovieData = await res.json();
            setMovieData(rawMovieData);
        }

        fetchMovie();
    }, [id])

    return(
        <main>
            <section className='single-movie-page'>
                {movieData !== null && <SingleMovie movieObj={movieData}/>}
            </section>
        </main>
    )
}

export default PageSingleMovie