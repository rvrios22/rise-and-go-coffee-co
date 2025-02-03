import { useQuery } from "@tanstack/react-query";
import { TopSeller } from "../../types/topSeller";
import CarouselItem from "./CarouselItem";
import "../../css/carousel.css";
import { useCallback } from "react";

const getTopSellers = async () => {
  const response = await fetch("/api/topSeller");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

function BestSellerCarousel() {
  const carouselRef = useCallback((carousel: HTMLDivElement) => {
    const cloneItems = () => {
      const items = Array.from(carousel.children) as HTMLDivElement[];

      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLDivElement;
        carousel.appendChild(clone);
      });
    };

    cloneItems();
  }, []);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["topSelers"],
    queryFn: getTopSellers,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <figure className="carousel-container">
      <div ref={carouselRef} className="carousel-track">
        {data.map((item: TopSeller) => (
          <CarouselItem
            key={item.id}
            name={item.name}
            id={item.id}
            amount={item.amount}
          />
        ))}
      </div>
    </figure>
  );
}

export default BestSellerCarousel;
