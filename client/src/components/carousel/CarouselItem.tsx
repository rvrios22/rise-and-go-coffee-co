import { Link } from "@tanstack/react-router";
import { TopSeller } from "../../types/topSeller";
import Image from "../image/Image";

function CarouselItem({ name, amount, catalogObjectId }: TopSeller) {
  return (
    <article>
      <Link to={`/shop/${catalogObjectId}`}>
        <img
          src="logo.webp"
          alt=""
          height={window.innerHeight / 6}
          width={window.innerWidth / 3}
        />
        <p className="lato">{name}</p>
        <p className="lato">${amount}</p>
      </Link>
    </article>
  );
}

export default CarouselItem;
