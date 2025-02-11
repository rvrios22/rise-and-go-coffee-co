import { TopSeller } from "../../types/topSeller";
import Image from "../Image";

function CarouselItem({ name, amount }: TopSeller) {
  return (
    <article>
      <Image
        height={window.innerHeight / 6}
        width={window.innerWidth / 3}
        heightDivisor={6}
        widthDivisor={3}
        name=""
        alt={name}
      />
      <p className="lato">{name}</p>
      <p className="lato">${amount}</p>
    </article>
  );
}

export default CarouselItem;
