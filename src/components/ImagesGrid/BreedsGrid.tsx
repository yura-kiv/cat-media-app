import React from "react";
import { BreedRes } from "../../models/catApi";
import ImagesGrid, { ImagesGridProps } from "./ImagesGrid";
import MessageBlock from "../MessageBlock/MessageBlock";
import { ReactComponent as Error } from "../../assets/icons/error-20.svg";
import { useGetBreedsQuery } from "../../store/api/queries/breedsQuery";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/store";
import Loader from "../Loader/Loader";
import { filterBreeds } from "../../helpers/breedsHelper";
import { getGridElement } from "./gridHelper";
import defaultImage from "../../assets/images/upload-bg.png";

export const BreedHoverButton: React.FC<{ breedInfo: BreedRes }> = ({ breedInfo }) => {
  return (
    <Link
      className="self-end mb-3 z-30 mx-3"
      to={`/breeds/${breedInfo.id}`}
    >
      <Button
        color="white"
        size="small"
        innerContent={breedInfo.name}
        className="z-30"
      />
    </Link>
  );
};

const BreedsGrid = () => {
  const filters = useAppSelector((state) => state.breedSlice.filters);
  const breedsInfo = useGetBreedsQuery(undefined, {
    selectFromResult: (breedsInfo) => {
      let sortedData;
      if (breedsInfo.data) sortedData = filterBreeds(filters, breedsInfo.data);
      return {
        ...breedsInfo,
        data: sortedData,
      };
    },
  });

  return (
    <>
      {breedsInfo.isLoading ? (
        <Loader size="large" />
      ) : breedsInfo.data ? (
        <ImagesGrid
          elements={breedsInfo.data.map((breed) => {
            const { id, image } = breed;
            const imaegValue = image ? image.url : defaultImage;
            return getGridElement(
              { id, src: imaegValue, alt: id + " breed grid image" },
              <BreedHoverButton breedInfo={breed} />
            );
          })}
        />
      ) : (
        <MessageBlock
          color="gray"
          icon={<Error />}
          innerContent={"Breeds not found :^("}
        />
      )}
    </>
  );
};

export default BreedsGrid;
