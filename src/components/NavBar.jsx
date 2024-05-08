import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav>
      {location.pathname !== '/' && (
    <NavLink to="/" className="nav-link" activeClassName="active-link">
      Home
    </NavLink>
    )}
    {location.pathname !== '/about' && (
    <NavLink to="/about" className="nav-link" activeClassName="active-link">
      About
    </NavLink>
  )}
  </nav>
  );
}

export default NavBar;