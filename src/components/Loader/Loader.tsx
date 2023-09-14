import React from "react";
import styles from "./Loader.module.css";
import { ReactComponent as LoaderIcon } from "../../assets/icons/loading-16.svg";

interface LoaderProps {
  size: "small" | "large";
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
  const loaderWrapperSize =
    size === "large" ? styles.loaderWrapperLarge : styles.loaderWrapperSmall;
  const loaderSize = size === "large" ? styles.loaderLarge : styles.loaderSmall;
  return (
    <div className={[styles.loaderWrapper, loaderWrapperSize].join(" ")}>
      <LoaderIcon className={[styles.loader, loaderSize].join(" ")} />
    </div>
  );
};

export default Loader;
