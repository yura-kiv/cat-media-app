import React, { SetStateAction, Dispatch, useEffect } from "react";
import styles from "./UploadWindow.module.css";
import backgroundImage from "../../assets/images/upload-bg.png";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-20.svg";

interface UploadWindowProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const UploadWindow: React.FC<UploadWindowProps> = ({ active, setActive }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={styles.windowDisplayWrapper}>
      <div
        onClick={() => {
          setActive((prev) => !prev);
        }}
        className={styles.windowBackdrop}
      ></div>
      <div className={styles.windowWrapper}>
        <IconButton
          color="red"
          size="large"
          icon={<CloseIcon />}
          className="absolute top-3 right-3"
          onClick={() => {
            setActive((prev) => !prev);
          }}
        />
        <span className="block text-center text-3xl font-medium mb-3">
          Upload a .jpg or .png Cat Image
        </span>
        <span className="block text-center text-lg text-gray-500 mb-3">
          Any uploads must comply with the{" "}
          <a
            className="text-red-300"
            href="#"
          >
            upload guidelines
          </a>{" "}
          or face deletion.
        </span>
        <div className={styles.dropFileArea}>
          <span className="text-lg z-10 text-gray-500">
            <b className="text-black">Drag here</b> your file or{" "}
            <b className="text-black">Click here</b> to upload
          </span>
          <img
            className="absolute w-1/3"
            src={backgroundImage}
            alt="background image drop area"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadWindow;
