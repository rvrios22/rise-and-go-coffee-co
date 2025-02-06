export type ImageLoader = {
  alt: string;
  height: number;
  width: number;
  isImgLoaded: boolean;
  heightDivisor?: number | undefined;
  widthDivisor?: number | undefined
  setLoaderIsRemoved: React.Dispatch<React.SetStateAction<boolean>>;
};