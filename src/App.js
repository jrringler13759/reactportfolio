import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";



function App() {
  return (
    <Router>
      <div>
        <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
