import React from "react";
import useImageSize from "../hooks/useImgSize";
import type { ImageLoader } from "../types/ImageLoader";

function ImageLoader({
  alt,
  height,
  width,
  isImgLoaded,
  heightDivisor = 1.5,
  widthDivisor = 1,
  setLoaderIsRemoved,
}: ImageLoader) {
  const imgSize = useImageSize(height, width, heightDivisor, widthDivisor);

  const style: React.CSSProperties = {
    background: "rgba(255,255,255,.28)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0,0,0,.1)",
    backdropFilter: "blur(8.1px)",
    WebkitBackdropFilter: "blur(8.1px)",
    border: "1px solid rgba(255,255,255,.5)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    objectFit: "cover",
    height: imgSize.height,
    width: imgSize.width,
    animation: `${isImgLoaded ? "fadeOut .75s forwards" : ""}`,
  };

  const animationFadeOut = `
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
        opacity: 0;
        }
    }
  `;

  return (
    <div
      style={{ position: "absolute", top: 0 }}
      onAnimationEnd={() => {
        setLoaderIsRemoved(true);
      }}
    >
      <style>{animationFadeOut}</style>
      <div style={style}></div>
      <img
        src="./logo.webp"
        height={imgSize.height}
        width={imgSize.width}
        alt={alt}
        style={isImgLoaded ? { animation: "fadeOut .75s forwards" } : {}}
      />
    </div>
  );
}

export default ImageLoader;
