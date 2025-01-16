import React from "react";
import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <>
      <div>
        <Link to="/">
          <img src="./logo.webp" alt="Company Logo" height="150" />
        </Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/shop">SHOP COFFEES</Link>
      </div>
      <div>
        <img src="./cart.svg" alt="Shopping Cart" height="50" />
      </div>
    </>
  );
}

export default Navbar;
