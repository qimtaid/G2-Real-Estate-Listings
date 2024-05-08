import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to this Real Estate Listings App</h1>
        <p>What were you looking to do?</p>
        <nav>
          <Link to="/buy" className="nav-link">Buy</Link>
          <Link to="/sell" className="nav-link">Rent</Link>
          <Link to="/rent" className="nav-link">Sell</Link>
        </nav>
      </header>
    </div>
  );
}

export default Home;