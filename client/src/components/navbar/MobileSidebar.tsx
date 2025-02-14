import { Link } from "@tanstack/react-router";
import "../../css/navbar.css";
import { MobileSidebarProps } from "../../types/mobileSidebar";

function MobileSidebar({ handleMenuClick }: MobileSidebarProps) {
  return (
    <menu className="mobile-sidebar-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={handleMenuClick}
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
      <ul>
        <li className="menu-item">
          <Link to="/">
            <p className="sub-header">HOME</p>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/about">
            <p className="sub-header">ABOUT</p>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/shop">
            <p className="sub-header">SHOP</p>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/cart">
            <p className="sub-header">CART</p>
          </Link>
        </li>
      </ul>
    </menu>
  );
}

export default MobileSidebar;
