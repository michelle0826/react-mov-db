import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function CategoryNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Popular');

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  function handleNavClick() {
    setIsOpen(!isOpen);
  }

  return (
    <section className='category-section'>
      <p>Browse by: </p>

      <nav className='category-nav' onClick={handleNavClick}>
        
        <ul className={ isOpen || window.innerWidth >=768 ? 'show' : null}>

          <li className={selectedOption === 'Popular' ? 'selected' : null} onClick={() => handleOptionClick('Popular')}>
            <NavLink to={"/category/popular"}>Popular</NavLink>
          </li>

          <li className={selectedOption === 'Now Playing' ? 'selected' : null} onClick={() => handleOptionClick('Now Playing')}>
            <NavLink to={"/category/now-playing"}>Now Playing</NavLink>
          </li>

          <li className={selectedOption === 'Upcoming' ? 'selected' : null} onClick={() => handleOptionClick('Upcoming')}>
            <NavLink to={"/category/upcoming"}>Upcoming</NavLink>
          </li>

          <li className={selectedOption === 'Top Rated' ? 'selected' : null} onClick={() => handleOptionClick('Top Rated')}>
            <NavLink to={"/category/top-rated"}>Top Rated</NavLink>
          </li>
        </ul>

        {selectedOption && <span className={`tab tab-${selectedOption.toLowerCase().replace(/\s/g, '-')}`}></span>}
          
      </nav>
    </section>
  );
}

export default CategoryNav