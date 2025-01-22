import { createLazyFileRoute } from "@tanstack/react-router";
import Image from "../components/Image";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Image
        name="banner.webp"
        alt="banner"
        height={window.innerHeight / 2}
        width={window.innerWidth}
      />
    </div>
  );
}
