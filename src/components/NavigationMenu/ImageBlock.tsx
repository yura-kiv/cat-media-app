import React from "react";
import styles from "./styles/NavigationMenu.module.css";

type ImageBlockProps = {
  color: "green" | "purple" | "yellow";
  imgSrc: string;
  alt: string;
};

const ImageBlock: React.FC<ImageBlockProps> = ({ color, imgSrc, alt }) => {
  const bgColor = "imgWrapper_" + color;

  return (
    <div className={[styles.imgWrapper, styles[bgColor]].join(" ")}>
      <img
        className={styles.img}
        src={imgSrc}
        alt={alt}
      ></img>
    </div>
  );
};

export default ImageBlock;
