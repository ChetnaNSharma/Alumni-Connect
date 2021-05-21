import React from "react";
import './App.css';
import Preloader from "./Components/Preloader/Preloader";
import Navbar from "./Components/Navbar/Navbar";
import Scroll from "./Components/ScrollToTop/ScrollToTop";
import Error from "./Components/Pages/Error/Error";
import Footer from "./Components/Pages/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatBot from './Components/ChatBot/ChatBot'
const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/Pages/Home/Home")), 6000);
  });
});
const Contact = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Components/Pages/Contact/Contact")),
      6000
    );
  });
});
const About = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/Pages/About/About")), 6000);
  });
});
const Service = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Components/Pages/Service/Service")),
      6000
    );
  });
});

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <React.Suspense fallback={<Preloader />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/service" component={Service} />
            <Route component={Error} />
          </Switch>
        </React.Suspense>
      </Router>
      <ChatBot />
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
