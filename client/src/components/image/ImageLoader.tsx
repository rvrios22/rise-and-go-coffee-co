import "../../css/loader.css";
import type { ImageLoader } from "../../types/ImageLoader";
function ImageLoader({ height, width }: ImageLoader) {
  const style = {
    height: height,
    width: width,
  };
  return (
    <div className="image-loader-container" style={style}>
      <div
        className="image-loader-spinner"
        style={{ height: height / 2 }}
      ></div>
      <img
        src="/logo.webp"
        alt="Rise And Go Logo"
        className="image-loader-image"
        height={height / 3}
      />
    </div>
  );
}

export default ImageLoader;
