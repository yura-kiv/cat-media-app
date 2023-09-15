import React, { useState, useCallback, Dispatch, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import backgroundImage from "../../assets/images/upload-bg.png";
import styles from "./UploadWindow.module.css";
import { arrayBuffer } from "stream/consumers";

export interface ImageFile {
  fileURL: string | ArrayBuffer | null;
  name: string | null;
}

interface UploadAreaProps {
  imageFile: ImageFile | null;
  setImageFile: Dispatch<SetStateAction<ImageFile | null>>;
}

const UploadArea: React.FC<UploadAreaProps> = ({ imageFile, setImageFile }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = new FileReader();
    file.onload = function () {
      const dataURL = file.result as string;
      setImageFile({ fileURL: dataURL, name: acceptedFiles[0].name });
    };
    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 1,
  });

  return (
    <>
      <div
        className={
          !isDragActive
            ? styles.dropFileArea
            : [styles.dropFileArea, styles.dropFileAreaActive].join(" ")
        }
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {imageFile ? (
          <img
            className="absolute object-cover object-center w-full h-full"
            src={imageFile.fileURL?.toString()}
            alt=""
          />
        ) : (
          <>
            {!isDragActive && (
              <span className="text-lg z-10 text-gray-500 dark:text-gray-800">
                <b className="text-black">Drag here</b> your file or{" "}
                <b className="text-black">Click here</b> to upload
              </span>
            )}
            {isDragAccept && (
              <span className="text-lg z-10 font-bold">✅ Put the image here :).</span>
            )}
            {isDragReject && (
              <span className="text-lg z-10 font-bold text-red-500">
                ❌ Select only one file! Files only .png, .jpeg, .jpg
              </span>
            )}
            <img
              className="absolute w-1/3"
              src={backgroundImage}
              alt="background image drop area"
            />
          </>
        )}
      </div>
      {!imageFile ? (
        <span className="block w-full text-center text-lg text-gray-500 mb-3 dark:text-gray-300">
          No file selected :(
        </span>
      ) : (
        <span className="block w-full text-center text-lg text-gray-500 mb-3">
          Image file, name: {imageFile.name}
        </span>
      )}
    </>
  );
};

export default UploadArea;
