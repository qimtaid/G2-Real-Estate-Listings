import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() { 

  return (
    <nav>
     
    
       <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
      <NavLink to="/sell" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Add Property</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
   
    
  
  </nav>
  );
}

export default NavBar;