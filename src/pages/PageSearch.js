import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { API_KEY } from "../globals/auth";
import Movies from "../components/Movies";


function PageSearch() {
    const { query } = useParams();
    const [results, setResults] = useState([]); 

    useEffect(() => {
        const fetchSearchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)

            let searchResultData = await response.json();

            searchResultData = searchResultData.results

            setResults(searchResultData);
        }

        fetchSearchData(); 
    
        
    }, [query])

    if (results.length === 0 ){
        return <h1 className="no-result">No results found for "{query}"</h1>
    }


  return (
    
    <div className="search-results">
        {query && <h1>Search results for: "{query}" </h1>}
        <Movies results={results}/>
       
    </div>
  )
}

export default PageSearch