import { API_TOKEN } from '../globals/auth';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatRating, formatDate, formatOverview} from '../globals/formatters';

function Banner() {
    const [bannerMovie, setBannerMovie] = useState([]);

    useEffect(() => {
        const fetchBannerMovie = async() => {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });

            let responseData = await response.json();
            console.log(responseData);
            responseData = responseData.results.splice(0,1);
            setBannerMovie(responseData[0]);
        }
        fetchBannerMovie();
    }, [])

    const formatBannerOverview = (overview) => {
        if(window.innerWidth < 768){
            return formatOverview(overview, 150);
        }
        else {
            return overview;
        }
    }

    return (
        <section className="banner-section" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path})`}}>
            <div>
                <p className='date'>In theatres {formatDate(bannerMovie.release_date)}</p>
                <h1>{bannerMovie.title}</h1>
                <p className='overview'>{formatBannerOverview(bannerMovie.overview)}</p>
                <div>
                    <p>Rating: {formatRating(bannerMovie.vote_average)}</p>
                    <Link className="button-link" to={`/movie/${bannerMovie.id}`}>More Info</Link>
                </div>
            </div>
        </section>
    )
}

export default Banner