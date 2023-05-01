import { useState } from "react"
import { useNavigate } from 'react-router-dom';


function SearchBar(props) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchInput = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim() !== '') {
            navigate(`/search/${encodeURIComponent(query)}`)
            setQuery('');
        }

    }
    return (

        <form className="search-bar" onSubmit={handleSubmit}>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search" value={query} onChange={handleSearchInput} />
                <button className="submit-search" type="submit">Search</button>
            </div>
        </form>

    )
}

export default SearchBar