import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/navbar.css';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          My Website
        </Link>
      </div>
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchValue} 
          onChange={handleSearchInputChange} 
        />
        <Link to={`/search/${searchValue}`} className="navbar-search-button">
          <i className="fas fa-search"></i>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/projects" className="navbar-link">Project Ideas</Link>
        <Link to="/quiz" className="navbar-link">Quiz</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <Link to="/about" className="navbar-link">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
