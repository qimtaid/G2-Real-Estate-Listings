import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Buy from './Buy';
import Sell from './Sell';
import Rent from './Rent';

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
      </Routes>
    </Router>
  );
}

export default App;