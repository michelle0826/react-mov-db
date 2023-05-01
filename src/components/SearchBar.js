import { useState } from "react"
import { useNavigate } from 'react-router-dom';


function SearchBar(props) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate ();
    
    const handleSearchInput = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${encodeURIComponent(query)}`)

    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" value={query} onChange={handleSearchInput} />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar