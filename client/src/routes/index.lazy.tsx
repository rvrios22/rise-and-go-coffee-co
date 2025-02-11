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
          name="banner.jpg"
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
          We are a Coachella Valley based coffee company that is passionate
          about the coffee culture and bringing delicious coffee flavors to our
          community. Our beans are specifically sourced from fair trade farms
          that produce great quality beans. Roasting coffee beans to perfection
          is what we specialize in, our master roaster has over 10 years coffee
          roasting experience. We are looking forward to everyone getting a
          taste of our different specialty roasts one sip at a time.
        </p>
      </div>
      <BestSellerCarousel />
    </div>
  );
}
