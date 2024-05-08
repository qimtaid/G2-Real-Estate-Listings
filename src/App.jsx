import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Buy from './components/Buy.jsx';
import Sell from './components/Sell.jsx';
import Rent from './components/Rent.jsx';
import CardForm from './components/CardForm.jsx'; // Import the CardForm component
import PropertyCardList from './components/PropertyCardList.jsx';

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
        <Route path="/sell" element={<Sell />} /> 
        <Route path="/rent" element={<Rent />} />
        <Route path="/property-details" element={<CardForm />} />
        <Route path="/property-list" element={<PropertyCardList />} />
      </Routes>
    </Router>
  );
}

export default App;

