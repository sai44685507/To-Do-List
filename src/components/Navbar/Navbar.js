import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="logo.png" alt="To-Do List Logo" className="logo" />
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
