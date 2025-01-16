import { Link } from "@tanstack/react-router";
import React from "react";

function MobileNavbar() {
  return (
    <>
      <div>
        <Link to="/">
        <img src="./logo.webp" alt="Logo" height="100" />
        </Link>
      </div>
      <div>
        <img src="./hamburger.svg" alt="menu" height="50" />
      </div>
    </>
  );
}

export default MobileNavbar;
