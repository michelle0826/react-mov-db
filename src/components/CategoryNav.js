import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function CategoryNav() {
  const [isOpen, setIsOpen] = useState(false); // shows/hides links
  const [selectedOption, setSelectedOption] = useState('Select option'); // display selected link on button

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <div className='category-nav'>
      <p>Browse by: </p>
      <nav>
      <button onClick={() => [setIsOpen(!isOpen), setSelectedOption('Select option')]}>{selectedOption}</button>
      {isOpen && (
        <ul>
          <li onClick={() => handleOptionClick('Popular')}>
            <NavLink to={"/category/popular"}>Popular</NavLink>
          </li>
          <li onClick={() => handleOptionClick('Top Rated')}>
            <NavLink to={"/category/top-rated"}>Top Rated</NavLink>
          </li>
          <li onClick={() => handleOptionClick('Now Playing')}>
            <NavLink to={"/category/now-playing"}>Now Playing</NavLink>
          </li>
          <li onClick={() => handleOptionClick('Upcoming')}>
            <NavLink to={"/category/upcoming"}>Upcoming</NavLink>
          </li>
        </ul>
      )}
      </nav>
    </div>
  );
}

export default CategoryNav