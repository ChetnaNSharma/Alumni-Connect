import React from 'react';
import './Contact.css';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
const About = () => {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon">
                        <NotListedLocationIcon/>
                        </div>
                        <div className="text">
                            <h2>Address</h2>
                            <p>467 Sugar  Road,
                                <br></br>
                                Owatonna,Minnestoa,
                                <br></br>
                                55909</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                        <PhoneIcon/>
                        </div>
                        <div className="text">
                            <h2>  Phone</h2>
                            <p>890-467-897-090</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                        <EmailIcon/>
                        </div>
                        <div className="text">
                            <h2>Email</h2>
                            <p>Alconn@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" required="required" />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required="required" />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required"/>
                            <span>Type Your Message</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" required="required" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default About
