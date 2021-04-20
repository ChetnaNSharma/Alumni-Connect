import React from 'react'
import './Navbar.css';



const Navbar = () => {
    return (
        <div className="navbar">
        <div className="leftside">
            <a  href="/">AluminConnect</a>
        </div>
        
        <div className="rightside">
            <div className="links" >
                <a  href="/">Home</a>
                <a href="/about">About </a>
                <a href="/contact">Contact </a>
                <a href="/service">Services </a>
            </div>
        </div>
        
    </div>
    );
}

export default Navbar
