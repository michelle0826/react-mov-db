import { Link } from 'react-router-dom';
import PageTitle from '../utilities/pageTitle';
import tmdbLogo from '../images/tmdb-logo.svg';

function PageAbout() {
    return(
        <main className="about-page">
            <PageTitle title="About Slate — Slate Movie Database" />
            <section className="about-section">
                <h1>Your Ultimate Cinematic Guide</h1>
                <p>
                    Browse Popular, Top Rated, Now Playing, and Upcoming movies on SLATE. Search for titles, check out their ratings, and see how they match up!
                    <br />
                    Discovered something interesting? Add the movie to your Watchlist for later viewing.
                    <br />
                    This product utilizes the TMDb API to generate content but is neither endorsed nor certifed by TMDb.
                </p>
                <Link to="https://www.themoviedb.org/"><img src={tmdbLogo} alt="TMDB logo" /></Link>
            </section>
        </main>
    )
}

export default PageAbout