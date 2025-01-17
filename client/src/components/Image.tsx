import { useState, useEffect, useRef } from "react";

type ImageProps = {
  name: string;
  alt: string;
  height: number;
  width: number;
};

function Image({ name, alt, height, width }: ImageProps) {
  const [imgSrc, setImgSrc] = useState("");
  const [imgSize, setImgSize] = useState({ height: height, width: width });
  const img = useRef(null);

  const fetchImgOnObserveCallback = async (
    entries: IntersectionObserverEntry[]
  ) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        try {
          const response = await fetch(`/api/image/${name}`);
          const blob = await response.blob();
          const blobURL = URL.createObjectURL(blob);
          setImgSrc(blobURL);
          return () => URL.revokeObjectURL(blobURL);
        } catch (err) {
          console.error(err);
        }
      }
    }
  };

  //initializes and cleans up observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(
      fetchImgOnObserveCallback,
      observerOptions
    );

    if (img.current) {
      observer.observe(img.current);
    }

    return () => {
      if (img.current) {
        observer.unobserve(img.current);
      }
    };
  }, []);

  const handleImgSize = () => {
    setImgSize({
      height: window.innerHeight / 2,
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleImgSize);

    return () => window.removeEventListener("resize", handleImgSize);
  }, []);

  return (
    <>
      <img
        src={imgSrc ? imgSrc : "./logo.webp"}
        alt={alt}
        height={imgSize.height}
        width={imgSize.width}
        loading="lazy"
        ref={img}
      />
    </>
  );
}

export default Image;
