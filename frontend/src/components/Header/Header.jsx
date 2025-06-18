import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("EDUCATION");

  const searchOptions = ["EDUCATION", "MUSEUM", "SUSTAINABILITY"];

  // Para animación de placeholder
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % searchOptions.length;
      setPlaceholderText(searchOptions[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">SARQAV</Link>
      </div>

      <nav className={`header-center ${menuOpen ? 'open' : ''}`}>
        <Link to="/landscape">LANDSCAPE</Link>
        <Link to="/engineering">ENGINEERING</Link>
        <Link to="/architecture">ARCHITECTURE</Link>
        <Link to="/planning">PLANNING</Link>
        <Link to="/products">PRODUCTS</Link>
      </nav>

      <div className="header-right">
        <button className="search-button" onClick={() => setSearchOpen(!searchOpen)}>
          <FaSearch />
          <span className="search-placeholder">{!searchOpen && placeholderText}</span>
        </button>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {searchOpen && (
        <div className="search-dropdown">
          <Link to="/education">EDUCATION</Link>
          <Link to="/museum">MUSEUM</Link>
          <Link to="/sustainability">SUSTAINABILITY</Link>
        </div>
      )}
    </header>
  );
}
