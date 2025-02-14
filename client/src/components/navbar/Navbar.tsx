import { Link } from "@tanstack/react-router";
import "../../css/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-left-flex">
        <Link to="/">
          <img src="./logo.webp" alt="Company Logo" height="125" />
        </Link>
        <div className="navbar-link-container">
          <Link to="/about">
            <p className="link navbar-link">ABOUT</p>
          </Link>
          <Link to="/shop">
            <p className="link navbar-link">SHOP</p>
          </Link>
        </div>
      </div>
      <div className="navbar-right-flex">
        <img src="./cart.svg" alt="Shopping Cart" height="30" />
      </div>
    </>
  );
}

export default Navbar;
