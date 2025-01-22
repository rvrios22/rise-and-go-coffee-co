import { useState, useEffect, useRef } from "react";
import ImageLoader from "./ImageLoader";
import useImageSize from "../hooks/useImgSize";

type ImageProps = {
  name: string;
  alt: string;
  height: number;
  width: number;
};

function Image({ name, alt, height, width }: ImageProps) {
  const [imgSrc, setImgSrc] = useState("");
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [loaderIsRemoved, setLoaderIsRemoved] = useState(false);
  const img = useRef(null);
  const imgSize = useImageSize(height, width);

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


  return (
    <div ref={img} style={{ position: "relative" }}>
      <img
        src={imgSrc}
        alt={alt}
        height={imgSize.height}
        width={imgSize.width}
        onLoad={() => {
          setIsImgLoaded(true);
        }}
        loading="lazy"
      />
      {!loaderIsRemoved && (
        <ImageLoader
          height={height}
          width={width}
          alt="Image Placeholder"
          isImgLoaded={isImgLoaded}
          setLoaderIsRemoved={setLoaderIsRemoved}
        />
      )}
    </div>
  );
}

export default Image;
