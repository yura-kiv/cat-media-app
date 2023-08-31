import React from "react";
import IconButton from "../components/Buttons/IconButton";
import { ReactComponent as UploadIcon } from "../assets/icons/upload-16.svg";
import Button from "../components/Buttons/Button";
import GalleryFilters from "../components/GalleryFilters/GalleryFilters";
import GalleryImagesGrid from "../components/ImagesGrid/GalleryImagesGrid";
import PageHeader from "../components/PageHeader/PageHeader";

const GalleryHeaderContent = () => {
  return (
    <Button
      color="red"
      size="small"
      className="ml-auto"
      innerContent={
        <>
          <UploadIcon />
          <span className="ml-3">UPLOAD</span>
        </>
      }
    />
  );
};

const GalleryPage = () => {
  return (
    <div className="gallery-section-wrapper relative bg-white p-5 rounded-3xl w-full min-h-[calc(100%-90px)]">
      <PageHeader pageName="GALLERY">{GalleryHeaderContent()}</PageHeader>
      <GalleryFilters />
      <GalleryImagesGrid />
    </div>
  );
};

export default GalleryPage;
