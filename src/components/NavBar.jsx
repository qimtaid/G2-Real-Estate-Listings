import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <nav>
      {location.pathname !== '/' && (
    <NavLink to="/" className="nav-link" activeClassName="active-link">
      Home
    </NavLink>
    )}
    
       <NavLink to="/sell" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Sell</NavLink>
      <NavLink to="/buy" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Buy</NavLink>
      <NavLink to="/rent" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Rent</NavLink>
   
    
    {location.pathname !== '/about' && (
    <NavLink to="/about" className="nav-link" activeClassName="active-link">
      About
    </NavLink>
  )}
  </nav>
  );
}

export default NavBar;