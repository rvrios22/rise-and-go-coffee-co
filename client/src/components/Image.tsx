import { useState, useEffect, useRef } from "react";
import ImageLoader from "./ImageLoader";
import useImageSize from "../hooks/useImgSize";
import type { Image } from "../types/Image";

function Image({
  name,
  alt,
  height,
  width,
  heightDivisor = 1.5,
  widthDivisor = 1,
}: Image) {
  const [imgSrc, setImgSrc] = useState("");
  const img = useRef(null);
  const imgSize = useImageSize(height, width, heightDivisor, widthDivisor);

  const fetchImgOnObserveCallback = async (
    entries: IntersectionObserverEntry[]
  ) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        try {
          const response = await fetch(`/api/image/${name}`);
          if(!response.ok) {
            throw new Error('Something went wrong')
          }
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

  return (
    <div
      ref={img}
      className="image-component"
      style={{
        position: "relative",
        height: `${imgSize.height}`,
        width: `${imgSize.width}`,
      }}
    >
      {!imgSrc ? (
        <ImageLoader height={imgSize.height} width={imgSize.width} />
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          height={imgSize.height}
          width={imgSize.width}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default Image;
