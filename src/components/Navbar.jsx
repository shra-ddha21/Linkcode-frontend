import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
const logo = "/assets/linklogo.png";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Linkcode Logo" />
        </Link>
        
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Courses</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Gallery</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        </div>

        <div className="navbar-auth">
          <Link to="/login" className="login-link">Log in</Link>
          <Link to="/signup" className="register-btn">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
