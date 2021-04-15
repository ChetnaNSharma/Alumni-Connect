import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';
import Error from './Components/Pages/Error/Error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
