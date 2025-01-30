import { useQuery } from "@tanstack/react-query";
import { TopSeller } from "../../types/topSeller";
const getTopSellers = async () => {
  const response = await fetch("/api/topSeller");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

function BestSellerCarousel() {
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

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      {data.map((item: TopSeller) => (
        <li key={item.id}>
          {item.name} ${item.amount}
        </li>
      ))}
    </ul>
  );
}

export default BestSellerCarousel;
