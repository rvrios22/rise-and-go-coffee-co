import React from "react";
import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src="./rise_and_go_logo.webp" alt="Company Logo" height="150" />
        </Link>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
