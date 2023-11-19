import React from 'react';
import './SignUp';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li><Link to="/Home">Home</Link></li>
        <li><NavLink to="/SignIn">SignIn</NavLink></li>
        <li className="dropdown">
          <span>Selling</span>
          <div className="dropdown-content">
            <NavLink to="/SignIn">LogIn</NavLink>
            <NavLink to="/SignUp">SignUp</NavLink>
            {/* Add more categories as needed */}
          </div></li>
      </ul>
    </nav>
  );
};

export default Navbar;