import { createLazyFileRoute, Link } from "@tanstack/react-router";
import Image from "../components/Image";
import "../css/index.css";
import BestSellerCarousel from "../components/carousel/BestSellerCarousel";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <header>
        <Image
          name="banner.webp"
          alt="banner"
          height={window.innerHeight / 1.5}
          width={window.innerWidth}
        />
        <div className="banner-text">
          <h1 className="shadow roboto banner-header">RISE & GO COFFEE CO.</h1>
          <p className="shadow lato banner-sub-header">
            Empowering your local shops with your favorite brews
          </p>
          <button className="shop-button">
            <Link to="/shop">SHOP NOW</Link>
          </button>
        </div>
      </header>
      <div>
        <h2 className="header">
          Rise & Go Coffee Co: Your Local{" "}
          <span className="gradient-text outline">Roast Master</span>
        </h2>
        <p className="general-text">
          Known for our work with Koffi in the Coachella Valley, now bringing
          fresh roasted coffee to your store (change as needed)
        </p>
      </div>
      <BestSellerCarousel />
    </div>
  );
}
