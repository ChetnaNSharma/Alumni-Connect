import React from 'react'
import img3 from "../../../assets/img3.png";

const Contact = () => {
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
        <img src={img3} id="img2" alt="cap" style={myStyle} />
        <div className="text1">
          <p style={imgStyle}>
            <h1>Contact-us</h1>
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nam debitis excepturi, ut corrupti totam exercitationem veniam ullam dolores illo minima, vero consequuntur molestiae nisi odio eveniet rem quidem doloremque.
          </p>
        </div>
      </div>
    );
}

export default Contact
