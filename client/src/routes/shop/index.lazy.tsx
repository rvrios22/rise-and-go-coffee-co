import { ShopItem } from "../../types/shopItem";
import { fetchItems } from "../../helper/fetch";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import Image from "../../components/Image";
import "../../css/shop.css";
import useScreenSize from "../../hooks/useScreenSize";

export const Route = createLazyFileRoute("/shop/")({
  component: ShopComponent,
});

function ShopComponent() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["shop"],
    queryFn: () => fetchItems("/api/shop"),
  });
  const screenSize = useScreenSize()
  

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h1 className="header">Shop Our Coffees</h1>
      <main className="shop-container">
        {data.map((item: ShopItem) => (
          <article key={item.catagoryObjId} className="shop-item">
            <Link to={item.catagoryObjId}>
              <Image
                width={window.innerWidth / 2}
                height={window.innerHeight / 3}
                heightDivisor={3}
                widthDivisor={2}
                name="banner.webp"
                alt=""
              />
              <p className="general-text">{item.name}</p>
              <p className="general-text">${item.price}</p>
            </Link>
          </article>
        ))}
      </main>
    </>
  );
}
