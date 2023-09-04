import React, { useEffect, useState, memo } from "react";
import { useAppSelector } from "../../hooks/store";
import styles from "./ImagesGrid.module.css";
import IconButton from "../Buttons/IconButton";
import { CatImagesRes } from "../../models/catApi";
import MessageBlock from "../MessageBlock/MessageBlock";

export interface ImagesGridProps {
  imageBlock: {
    id: string;
    src: string;
    alt: string;
  };
  hoverBlockButton: JSX.Element;
}

const ImagesGrid: React.FC<{ elements: ImagesGridProps[] }> = memo(({ elements }) => {
  const groupSize = 5;
  const imagesGridMatrix = () => {
    const result = [];
    for (let i = 0; i < elements.length; i += groupSize) {
      result.push(elements.slice(i, i + groupSize));
    }
    return result;
  };

  return (
    <div className="flex flex-col gap-3">
      {imagesGridMatrix().map((row, index) => {
        return (
          <div
            key={index}
            className={
              index % 2 === 0
                ? styles.gridWrapper
                : [styles.gridWrapper, styles.gridWrapperReverse].join(" ")
            }
          >
            {row.map((cell, index) => {
              return (
                <div
                  key={cell.imageBlock.id}
                  className={styles.imageWrapper}
                >
                  <div className={styles.hoverBlockWrapper}>
                    {cell.hoverBlockButton}
                    <div className="absolute top-0 left-0 w-full h-full bg-red-300 opacity-30 z-20"></div>
                  </div>
                  <img
                    className="relative object-cover w-full h-full"
                    src={cell.imageBlock.src}
                    alt={cell.imageBlock.alt}
                  />
                </div>
              );
            })}
          </div>
        );
      })}{" "}
    </div>
  );
});

export default ImagesGrid;
