import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Main from "./pages/Main";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Resume} />
      <Footer />
    </Router>
  );
}

export default App;