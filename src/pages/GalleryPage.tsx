import React, { useState } from "react";
import IconButton from "../components/Buttons/IconButton";
import { ReactComponent as BackIcon } from "../assets/icons/back-20.svg";
import { ReactComponent as UploadIcon } from "../assets/icons/upload-16.svg";
import Button from "../components/Buttons/Button";
import GalleryFilters from "../components/GalleryFilters/GalleryFilters";

const GalleryPage = () => {
  return (
    <div className="gallery-section-wrapper relative bg-white p-5 rounded-3xl w-full h-[calc(100vh-130px)]">
      <div className="gallery-header flex items-center mb-3">
        <IconButton
          color="red"
          size="large"
          icon={<BackIcon />}
        ></IconButton>
        <span className="py-2 px-6 bg-red-400 text-white rounded-2xl text-xl font-medium tracking-widest ml-3">
          GALLERY
        </span>
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
      </div>
      <GalleryFilters />
    </div>
  );
};

export default GalleryPage;
