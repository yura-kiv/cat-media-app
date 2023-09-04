import React, { useState } from "react";
import styles from "./ImagesGrid.module.css";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as Heart } from "../../assets/icons/fav-30.svg";
import { ReactComponent as HeartColor } from "../../assets/icons/fav-color-30.svg";
import { CatImagesRes } from "../../models/catApi";
import { useAppSelector } from "../../hooks/store";
import ImagesGrid, { ImagesGridProps } from "./ImagesGrid";
import { ReactComponent as Loader } from "../../assets/icons/loading-16.svg";
import MessageBlock from "../MessageBlock/MessageBlock";
import { ReactComponent as Error } from "../../assets/icons/error-20.svg";

const ImageHoverButton: React.FC<{ imageInfo: CatImagesRes }> = () => {
  const [like, setLike] = useState(false);
  return (
    <IconButton
      color="white"
      icon={like ? <HeartColor /> : <Heart />}
      size="large"
      className="z-30"
      onClick={() => {
        setLike((prev) => !prev);
      }}
    />
  );
};

const GalleryGrid = () => {
  const imagesData = useAppSelector((state) => state.gallerySlice.catImages);

  const getImagesGridElements = (): ImagesGridProps[] => {
    const gridElements: ImagesGridProps[] = [];
    imagesData.data.forEach((image) => {
      const gridElement = {
        imageBlock: {
          id: image.id,
          src: image.url,
          alt: image.id + " image of cat",
        },
        hoverBlockButton: <ImageHoverButton imageInfo={image} />,
      };
      gridElements.push(gridElement);
    });
    return gridElements;
  };

  return (
    <>
      {imagesData.loadingStatus !== "succeeded" ? (
        <div className="w-full h-full flex justify-center">
          <Loader className="relative top-40 w-20 h-20 animate-ping" />
        </div>
      ) : imagesData.data.length !== 0 ? (
        <ImagesGrid elements={getImagesGridElements()} />
      ) : (
        <MessageBlock
          color="gray"
          icon={<Error />}
          innerText="Try another filters... Images not found :^("
        />
      )}
    </>
  );
};

export default GalleryGrid;
