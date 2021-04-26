import React from 'react'
import './Navbar.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';



const Navbar = () => {
    return (
      <div className = "nav">
        <Router>
          <ul>
            <li className="option">
              <Link className="Nav-bar" to="/">Home</Link>
            </li>
            <li className="option">
              <Link className="Nav-bar" to="/about">About-us</Link>
            </li>
            <li className="option">
              <Link className="Nav-bar" to="/contact">Contact-Us</Link>
            </li>
            <li className="option">
              <Link className="Nav-bar" to="/">Services</Link>
            </li>
          </ul>
        </Router>
      </div>
    );
}

export default Navbar
