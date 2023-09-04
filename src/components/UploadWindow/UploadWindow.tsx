import React, { SetStateAction, Dispatch, useEffect, useCallback, useState } from "react";
import styles from "./UploadWindow.module.css";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-20.svg";
import UploadArea, { ImageFile } from "./UploadArea";
import Button from "../Buttons/Button";
interface UploadWindowProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const UploadWindow: React.FC<UploadWindowProps> = ({ active, setActive }) => {
  const [imageFile, setImageFile] = useState<ImageFile | null>(null);

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
        <UploadArea
          imageFile={imageFile}
          setImageFile={setImageFile}
        />
        {imageFile?.file && (
          <Button
            color="red"
            size="large"
            innerContent="UPLOAD PHOTO"
            className="relative"
          />
        )}
      </div>
    </div>
  );
};

export default UploadWindow;
