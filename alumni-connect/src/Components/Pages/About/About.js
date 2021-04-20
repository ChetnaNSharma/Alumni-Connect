import React from 'react';
import img2 from '../../../assets/img2.png';
const About = () => {

    const myStyle = {
      width: "50%",
      height: "50%",
    };
    
    const imgStyle = {
        position: "absolute",
     top: "50%",
  left: "70%",
  transform: "translate(-50%, -50%)",
    };

    return (
      <div>
        <img src={img2} id="img2" alt="cap" style={myStyle} />
        <div className="text1">
          <p style={imgStyle}>
            <h1>About-us</h1>
            <br/>
            Alumni Connect is a long-awaited dream project for our college, JSS
            Academy Of Technical Education, Noida, concerning the
            ever-increasing competitive and challenging atmosphere, the
            opportunity of connections among college students and alumni may
            serve professional and heart-warming support. We aim to build a
            website that serves to connect our college folk, which would bring
            the clan support and nostalgia in few clicks.
          </p>
        </div>
      </div>
    );
}

export default About
