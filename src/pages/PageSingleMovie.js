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

            
    }, [])


    // loop over so the site is Youtube, and video type as Trailer -- in array 
    // return key 
    //use share embed youtube video and dynamically change the key 

    return(
        <main>
            <section className='single-movie-page'>
                {movieData !== null && <SingleMovie movieObj={movieData}/>}
                {/* <h1>This is a Single Movie Page.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut provident impedit vitae dolore at, non qui ducimus similique sapiente reiciendis consequatur alias veritatis, repellat sequi necessitatibus recusandae! Ad adipisci maxime aliquid incidunt iste libero laborum officiis unde, alias modi omnis aliquam quod. Placeat, repellendus. Quam sapiente eveniet eligendi veritatis nemo.</p> */}
            </section>
        </main>
    )
}

export default PageSingleMovie