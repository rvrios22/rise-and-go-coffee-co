import { useState, useEffect } from "react";

const useImageSize = (initialHeight: number, initialWidth: number) => {
  const [imgSize, setImgSize] = useState({
    height: initialHeight,
    width: initialWidth,
  });

  useEffect(() => {
    const handleImgSize = () => {
      setImgSize({
        height: window.innerHeight / 2,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleImgSize);

    return () => window.removeEventListener("resize", handleImgSize);
  }, []);

  return imgSize;
};

export default useImageSize;
