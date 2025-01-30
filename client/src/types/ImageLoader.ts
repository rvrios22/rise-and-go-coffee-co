export type ImageLoader = {
    alt: string;
    height: number;
    width: number;
    isImgLoaded: boolean;
    setLoaderIsRemoved: React.Dispatch<React.SetStateAction<boolean>>;
  };