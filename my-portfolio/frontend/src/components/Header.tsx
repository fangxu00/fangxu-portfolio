import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header: React.FC = () => {
  return (
    <header>
      <h1>Fang Xu Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Biography</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/upload">Upload</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
