import { useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as UploadIcon } from "../assets/icons/upload-16.svg";
import Button from "../components/Buttons/Button";
import GalleryFilters from "../components/GalleryFilters/GalleryFilters";
import GalleryGrid from "../components/ImagesGrid/GalleryGrid";
import PageHeader from "../components/PageHeader/PageHeader";
import styles from "./styles/Pages.module.css";
import UploadWindow from "../components/UploadWindow/UploadWindow";
import GalleryPagination from "../components/Pagination/GalleryPagination";

const GalleryPage = () => {
  const app = document.getElementById("App");
  const [uploadWindowActive, setUploadWindowActive] = useState<boolean>(false);
  return (
    <div className={styles.pageWrapper}>
      {uploadWindowActive &&
        createPortal(
          <UploadWindow
            active={uploadWindowActive}
            setActive={setUploadWindowActive}
          />,
          app!
        )}
      <PageHeader pageName="GALLERY">
        {
          <Button
            onClick={() => {
              setUploadWindowActive((prev) => !prev);
            }}
            color="red"
            size="large"
            className="ml-auto"
            innerContent={
              <>
                <UploadIcon />
                <span className="ml-3">UPLOAD</span>
              </>
            }
          />
        }
      </PageHeader>
      <GalleryFilters />
      <GalleryGrid />
      <GalleryPagination />
    </div>
  );
};

export default GalleryPage;
