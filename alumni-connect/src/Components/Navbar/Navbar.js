import React from "react";
import "./Navbar.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About-us</Link>
          </li>
          <li>
            <Link to="/contact">Contact-Us</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
        </ul>
      </Router>
    </div>
  );
};

export default Navbar;
