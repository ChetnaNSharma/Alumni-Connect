import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';
import Error from './Components/Pages/Error/Error';

 import Service from './Components/Pages/Service/Service';
import Footer from './Components/Pages/Footer/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Router>
        <Switch>

 
       
    


          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
    <Route exact path="/service" component={Service} />
          <Route component={Error} />

        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
