import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import png from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/'>
        <img src={png} alt="To-Do List Logo" className="logo" />
      </Link>
      <h1>To-Do-List App</h1>
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
