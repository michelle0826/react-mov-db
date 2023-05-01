import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function CategoryNav() {
  const [isOpen, setIsOpen] = useState(false); // shows/hides links
  const [selectedOption, setSelectedOption] = useState('Select option'); // display selected link on button

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  function handleNavClick() {
    if (window.innerWidth < 768){
      setIsOpen(!isOpen);
    }
  }

  return (
    <section className='category-section'>
      <p>Browse by: </p>
      <nav className='category-nav' onClick={handleNavClick}>
        <p>{selectedOption}</p>
        <ul className={ isOpen || window.innerWidth >= 768 ? 'show' : ''}>
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
      </nav>
    </section>
  );
}

export default CategoryNav;