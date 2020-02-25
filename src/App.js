import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;