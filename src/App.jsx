// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Buy from './components/Buy.jsx';
import Sell from './components/Sell.jsx';
import Rent from './components/Rent.jsx';


function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Rent />} /> 
        <Route path="/rent" element={<Sell />} />
      </Routes>
    </Router>
  );
}

export default App;

