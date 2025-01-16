import { useState, useEffect } from "react";

type ImageProps = {
  name: string;
  alt: string;
  height: number;
  width: number;
};

function Image({ name, alt, height, width }: ImageProps) {
  const [imgSrc, setImgSrc] = useState("");
  const [imgSize, setImgSize] = useState({ height: height, width: width });

  const fetchBanner = async () => {
    try {
      const response = await fetch(`/api/image/${name}`);
      const blob = await response.blob();
      const blobURL = URL.createObjectURL(blob);
      setImgSrc(blobURL);
      return () => URL.revokeObjectURL(imgSrc);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBanner();
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
  });

  return (
    <img
      src={imgSrc}
      alt={alt}
      height={imgSize.height}
      width={imgSize.width}
      loading="lazy"
    />
  );
}

export default Image;
