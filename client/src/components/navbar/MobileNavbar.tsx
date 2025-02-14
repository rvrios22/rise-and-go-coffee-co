import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import MobileSidebar from "./MobileSidebar";

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = router.history.subscribe(() => {
      setIsMenuOpen(false);
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <>
      <div>
        <Link to="/">
          <img src="./logo.webp" alt="Logo" height={100} />
        </Link>
      </div>
      <div className="mobile-navbar-right-flex">
        <Link to="/cart">
          <img src="./cart.svg" alt="cart" height={35} />
        </Link>
        <img
          onClick={handleMenuClick}
          src="./hamburger.svg"
          alt="menu"
          height={40}
        />
      </div>
      {isMenuOpen && (
        <MobileSidebar
          handleMenuClick={handleMenuClick}
          isMenuOpen={isMenuOpen}
        />
      )}
    </>
  );
}

export default MobileNavbar;
