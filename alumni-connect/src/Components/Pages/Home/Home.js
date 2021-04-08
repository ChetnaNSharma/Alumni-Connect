import React from 'react';
import img from '../../../assets/img.jpg';
import './Home.css';

const Home = () => {
    return (
      <div>
        <img src={img} id= "img1" />
        <div className="text">
          <h2>Welcome to Alumni Connect!</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            dolorum, aliquid quaerat omnis quia mollitia odio perspiciatis saepe
            praesentium alias molestiae ad explicabo suscipit culpa, illo et
            dicta, neque error?
          </p>
        </div>
      </div>
    );
}

export default Home
