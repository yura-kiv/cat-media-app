import React from "react";
import styles from "./ImagesGrid.module.css";

export type GridImageBlock = {
  id: string;
  src: string;
  alt: string;
};

export interface ImagesGridProps {
  imageBlock: GridImageBlock;
  hoverBlockButton: React.ReactNode;
}

const ImagesGrid: React.FC<{ elements: ImagesGridProps[] }> = ({ elements }) => {
  const groupSize = 5;
  const imagesGridMatrix = () => {
    const result = [];
    for (let i = 0; i < elements.length; i += groupSize) {
      result.push(elements.slice(i, i + groupSize));
    }
    return result;
  };

  return (
    <div className="flex flex-col gap-2.5">
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
                    <div className="absolute top-0 left-0 w-full h-full bg-red-100 opacity-40 z-20"></div>
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
};

export default ImagesGrid;
