import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function CategoryNav() {
  const [isOpen, setIsOpen] = useState(false); // shows/hides links
  const [selectedOption, setSelectedOption] = useState('Popular'); // display selected link on button

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
        {/* when isOpen is true and on smaller screens, the p tag that displays the current selectedOption is hidden so that only the li's are shown */}
        <p style={{ display: isOpen || window.innerWidth >= 768 ? 'none' : 'block'}}>{selectedOption}</p>

        {/* visibility is conditional to state and window width */}
        <ul className={ isOpen || window.innerWidth >= 768 ? 'show' : null}>

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

export default CategoryNav;