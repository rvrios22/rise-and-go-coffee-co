import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const getScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    getScreenSize();

    window.addEventListener("resize", getScreenSize);

    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  return screenSize;
};

export default useScreenSize;
