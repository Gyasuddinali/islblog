// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const handleNavClick = () => setCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <a href="#categories" className="navbar-brand d-flex align-items-center" onClick={handleNavClick}>
  AllCategories
</a>
      <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavClick}>
        <img
          src="https://al-islam.org/sites/all/themes/al_islam_bootstrap/images/book-pile.png"
          alt="logo"
          height="40"
          className="me-2"
        />
        Al-Islam.org
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded={!collapsed}
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
        <form
          className="d-flex ms-auto me-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(query);
            setCollapsed(true);
          }}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Custom Search..."
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-info text-white" type="submit">
            Search
          </button>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/categories" className="nav-link" onClick={handleNavClick}>
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/donate" className="nav-link" onClick={handleNavClick}>
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
