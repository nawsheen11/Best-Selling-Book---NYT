import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Best Selling Books</h1>
      <ul className="navbar-link">
        <Link to="/fiction">
          <li>Fiction</li>
        </Link>
        <Link to="/non-fiction">
          <li>Nonfiction</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
