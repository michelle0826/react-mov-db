import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';

function SearchBar(props) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const {setNavOpen} = props; 

    // set timeout to track 
    const handleSearchInput = (event) => {
        setQuery(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim() !== '') {
            navigate(`/search/${encodeURIComponent(query)}`)
            setQuery('');
            setNavOpen(false);
            document.activeElement.blur();
        }

    }
    return (

        <form className="search-bar" onSubmit={handleSubmit}>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search" value={query} onChange={handleSearchInput} />
                <button className="submit-search" type="submit"><HiOutlineSearch/></button>
            </div>
        </form>

    )
}

export default SearchBar