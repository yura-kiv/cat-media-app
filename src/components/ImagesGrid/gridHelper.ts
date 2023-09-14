import { GridImageBlock, ImagesGridProps } from "./ImagesGrid";

export const getGridElement = (
  image: GridImageBlock,
  hoverItem: React.ReactNode
): ImagesGridProps => {
  const { id, alt, src } = image;
  const gridElement = {
    imageBlock: {
      id,
      src,
      alt,
    },
    hoverBlockButton: hoverItem,
  };
  return gridElement;
};
