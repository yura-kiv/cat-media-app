import React, { useState } from "react";
import styles from "./ImagesGrid.module.css";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as Heart } from "../../assets/icons/fav-30.svg";
import { ReactComponent as HeartColor } from "../../assets/icons/fav-color-30.svg";
import { BreedRes, CatImagesRes } from "../../models/catApi";
import { useAppSelector } from "../../hooks/store";
import ImagesGrid, { ImagesGridProps } from "./ImagesGrid";
import { ReactComponent as Loader } from "../../assets/icons/loading-16.svg";
import MessageBlock from "../MessageBlock/MessageBlock";
import { ReactComponent as Error } from "../../assets/icons/error-20.svg";
import { useGetBreedsQuery } from "../../store/api/endpointsQuery";
import Button from "../Buttons/Button";

const ImageHoverButton: React.FC<{ breedInfo: BreedRes }> = ({ breedInfo }) => {
  return (
    <Button
      color="red"
      size="large"
      innerContent={breedInfo.name}
    />
  );
};

const BreedsGrid = () => {
  const breedsInfo = useGetBreedsQuery();
  const defaultUrlImage = "https://api.thecatapi.com/v1/images/";

  const getBreedsGridElements = (): ImagesGridProps[] => {
    const gridElements: ImagesGridProps[] = [];
    if (breedsInfo.data) {
      breedsInfo.data.forEach((breed) => {
        const gridElement = {
          imageBlock: {
            id: breed.id,
            src: defaultUrlImage + breed.reference_image_id,
            alt: breed.id + " breed preview image",
          },
          hoverBlockButton: <ImageHoverButton breedInfo={breed} />,
        };
        gridElements.push(gridElement);
      });
    }
    return gridElements;
  };

  return (
    <>
      {breedsInfo.isLoading ? (
        <div className="w-full h-full flex justify-center">
          <Loader className="relative top-40 w-20 h-20 animate-ping" />
        </div>
      ) : breedsInfo.data ? (
        <ImagesGrid elements={getBreedsGridElements()} />
      ) : (
        <MessageBlock
          color="gray"
          icon={<Error />}
          innerText="Breeds not found :^("
        />
      )}
    </>
  );
};

export default BreedsGrid;
