import { API_TOKEN } from '../globals/auth';
import { useState } from 'react';

function Banner () {
    const [movieData, setMovieData] = useState([]);

    return (
        <section className="banner-section">
            {movieData}
        </section>
    )
}

export default Banner