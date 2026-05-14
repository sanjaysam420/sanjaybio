import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div className="nav-right">
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
