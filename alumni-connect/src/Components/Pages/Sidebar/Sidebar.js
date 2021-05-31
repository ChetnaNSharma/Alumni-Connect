import React from 'react'
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import './Sidebar.css';

const Sidebar = () => {
    return ( <div className="social">
    <ul>
        <li>
            <a>
                <span>WhatsApp</span>
                <WhatsAppIcon />
            </a>
        </li>
        <li>
            <a>
                <span>Facebook</span>
                <FacebookIcon />
            </a>
        </li>
        <li>
            <a>
                <span>Github</span>
                <GitHubIcon />
            </a>
        </li>
        <li>
            <a>
                <span>Instagram</span>
                <InstagramIcon />
            </a>
        </li>
        <li>
            <a>
                <span>YouTube</span>
                <YouTubeIcon />
            </a>
        </li>
        <li>
            <a>
                <span>LinkedIn</span>
                <LinkedInIcon />
            </a>
        </li>
    </ul>
</div>
);
}
 
export default Sidebar;