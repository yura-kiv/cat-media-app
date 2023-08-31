import React, { useEffect, useState } from "react";
import { ReactComponent as Loader } from "../../assets/icons/loading-16.svg";
import { useAppSelector } from "../../hooks/store";
import styles from "./ImagesGrid.module.css";
import { ReactComponent as Heart } from "../../assets/icons/fav-30.svg";
import { ReactComponent as HeartColor } from "../../assets/icons/fav-color-30.svg";
import IconButton from "../Buttons/IconButton";
import { CatImagesRes } from "../../models/catApi";

const ImageHoverBlock: React.FC<{ imageInfo: CatImagesRes }> = () => {
  const [like, setLike] = useState(false);
  return (
    <div className={styles.hoverBlockWrapper}>
      <IconButton
        color="white"
        icon={like ? <HeartColor /> : <Heart />}
        size="large"
        className="z-30"
        onClick={() => {
          setLike((prev) => !prev);
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-red-300 opacity-30 z-20"></div>
    </div>
  );
};

const GalleryImagesGrid = () => {
  const imagesData = useAppSelector((state) => state.gallerySlice.catImages);
  const groupSize = 5;
  const imagesGridMatrix = () => {
    const result = [];
    for (let i = 0; i < imagesData.data.length; i += groupSize) {
      result.push(imagesData.data.slice(i, i + groupSize));
    }
    return result;
  };

  return (
    <div className="flex flex-col gap-3">
      {imagesData.loadingStatus !== "succeeded" ? (
        <div className="w-full h-full flex justify-center">
          <Loader className="relative top-40 w-20 h-20 animate-ping" />
        </div>
      ) : imagesData.data.length !== 0 ? (
        imagesGridMatrix().map((row, index) => {
          return (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? styles.gridWrapper
                  : [styles.gridWrapper, styles.gridWrapperReverse].join(" ")
              }
            >
              {row.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={styles.imageWrapper}
                  >
                    <ImageHoverBlock imageInfo={item} />
                    <img
                      className="relative object-cover w-full h-full"
                      src={item.url}
                      alt={item.id + " cat image"}
                    />
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <span className="w-full p-3 pl-6 bg-gray-100 rounded-2xl text-lg">
          Images not found :(. Try another filters...
        </span>
      )}
    </div>
  );
};

export default GalleryImagesGrid;
