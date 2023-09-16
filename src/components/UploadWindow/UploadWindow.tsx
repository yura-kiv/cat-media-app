import React, { SetStateAction, Dispatch, useEffect, useState } from "react";
import styles from "./UploadWindow.module.css";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-20.svg";
import UploadArea, { ImageFile } from "./UploadArea";
import Button from "../Buttons/Button";
import { UploadImageRes } from "../../models/catApi";
import { AxiosError } from "axios";
import Loader from "../Loader/Loader";
import MessageBlock from "../MessageBlock/MessageBlock";
import { ReactComponent as Success } from "../../assets/icons/success-20.svg";
import { ReactComponent as Error } from "../../assets/icons/error-20.svg";
import { dataURItoBlob } from "../../helpers/uploadHelper";
import { catApiThunk } from "../../store/api/catApi";
import { subID } from "../..";

interface UploadWindowProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const UploadWindow: React.FC<UploadWindowProps> = ({ active, setActive }) => {
  const [imageFile, setImageFile] = useState<ImageFile | null>(null);
  const [imageUploadProcess, setImageUploadProcess] = useState<{
    isLoading: boolean;
    onError: null | string;
    onSuccess: null | UploadImageRes;
  }>({
    isLoading: false,
    onError: null,
    onSuccess: null,
  });

  const uploadBtnHandler = () => {
    if (imageFile?.fileURL) {
      setImageUploadProcess({ onError: null, onSuccess: null, isLoading: true });
      const fileBinary = dataURItoBlob(imageFile.fileURL.toString());
      catApiThunk
        .post(
          "images/upload",
          {
            file: fileBinary,
            sub_id: subID,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          setImageUploadProcess({
            onError: null,
            isLoading: false,
            onSuccess: res.data,
          });
          setImageFile(null);
          console.log("response: ", res.request);
        })
        .catch((err: AxiosError) => {
          setImageUploadProcess({
            onSuccess: null,
            isLoading: false,
            onError: err.response?.data!.toString(),
          });
          setImageFile(null);
          console.log("error: ", err);
        });
    }
  };

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
        <span className="block text-center text-3xl font-medium mb-3 dark:text-gray-100">
          Upload a .jpg or .png Cat Image
        </span>
        <span className="block text-center text-lg text-gray-500 mb-3 dark:text-gray-400">
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
        {imageFile?.fileURL && !imageUploadProcess.isLoading && (
          <Button
            color="red"
            size="large"
            innerContent="UPLOAD PHOTO"
            className="relative mb-3"
            onClick={uploadBtnHandler}
          />
        )}{" "}
        {imageUploadProcess.isLoading && <Loader size="large" />}
        {imageUploadProcess.onSuccess && (
          <MessageBlock
            color="gray"
            icon={<Success />}
            innerContent="Thanks for the Upload - Cat found!"
          />
        )}
        {imageUploadProcess.onError && (
          <MessageBlock
            color="gray"
            icon={<Error />}
            innerContent={`No Cat found - try a different one! (Err: ${imageUploadProcess.onError})`}
          />
        )}
      </div>
    </div>
  );
};

export default UploadWindow;
