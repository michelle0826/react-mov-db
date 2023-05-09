import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { API_KEY } from "../globals/auth";
import Movies from "../components/Movies";


function PageSearch() {
    const { query } = useParams();
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSearchData = async () => {

            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);

                if (!response.ok) {
                    setError('Sorry, an error occurred while retrieving movie data');
                } else {
                    let searchResultData = await response.json();
                    searchResultData = searchResultData.results;
                    setResults(searchResultData);
                    setError(null);
                }
            } catch (error) {
                setError('Sorry, an error occurred while retrieving movie data');
            }

        }

        fetchSearchData();


    }, [query])

    if (results.length === 0) {
        return (
            <main>
                <section className="search-results">
                    <h1 className="no-result">No results found for "{query}"</h1>
                </section>
            </main>
        )
    }
    
    return (
        <main>
            <section className="search-results">
                {error && <h1>{error}</h1>}
                {query && <h1>Search results for: "{query}" </h1>}
                <Movies results={results} />
            </section>
        </main>
    )
}

export default PageSearch