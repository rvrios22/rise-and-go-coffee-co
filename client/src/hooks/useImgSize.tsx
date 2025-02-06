import { useState, useEffect } from "react";

const useImageSize = (
  initialHeight: number,
  initialWidth: number,
  heightDivisor: number,
  widthDivisor: number
) => {
  const [imgSize, setImgSize] = useState({
    height: initialHeight,
    width: initialWidth,
  });

  useEffect(() => {
    const handleImgSize = () => {
      setImgSize({
        height: window.innerHeight / heightDivisor,
        width: window.innerWidth / widthDivisor,
      });
    };

    window.addEventListener("resize", handleImgSize);

    return () => window.removeEventListener("resize", handleImgSize);
  }, []);

  return imgSize;
};

export default useImageSize;
