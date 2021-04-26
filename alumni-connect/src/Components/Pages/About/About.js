import React from 'react';
import './About.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import Images from './Man.jpg';

export default function About() {
    return (
        <div className="section">
            <div className="container">
                <div className="content-section">
                    <div className="title">
                        <h1>About Us</h1>
                    </div>
                    <div className="content">
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing  industry.
                        </h3>
                        <p>Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                        <div >
                            <button className="button">Read More</button>
                        </div>
                        
                    </div> 
                    <div className="social">
                        <FacebookIcon />    &nbsp;
                        <GithubIcon />      &nbsp;
                        <TwitterIcon />     &nbsp;
                    </div>
                    
                </div>
                <div className="image-section">
                    <img src={Images} alt="Doctor Examining Patient" height="100px"  />
                </div>
                    
            </div>
        </div>
    )
}
