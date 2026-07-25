import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          🌾 <span>Agrobaz</span>
        </Link>
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/marketplace">Marketplace</Link>

        <Link to="/suppliers">Suppliers</Link>

        <Link to="/commission">Commission</Link>

        <Link to="/contact">Contact</Link>

      </div>

      <div className="nav-buttons">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;