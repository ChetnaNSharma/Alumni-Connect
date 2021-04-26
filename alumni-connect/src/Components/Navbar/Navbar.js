import React,{useState} from 'react'
import './Navbar.css';

import ReorderIcon from '@material-ui/icons/Reorder';

const Navbar = () => {

    const [showLinks ,setShowLinks] = useState(false)
    return (
        <div className="navbar">

            <div className="leftside">
                <a  href="/">AluminConnect</a>
            </div>
            
            <div className="rightside">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a  href="/">Home</a>
                    <a href="/about">About </a>
                    <a href="/contact">Contact </a>
                    <a href="/service">Services </a>
                </div>
                <button onClick={()=> setShowLinks(!showLinks)}><ReorderIcon/></button>
            </div>
            
        </div>
    );
}

export default Navbar 
