import React from "react";
import styles from "./styles/Pages.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import { useParams } from "react-router-dom";
import { useGetBreedsQuery } from "../store/api/breedsQuery";
import Loader from "../components/Loader/Loader";
import ImagesGrid from "../components/ImagesGrid/ImagesGrid";
import { ReactComponent as Error } from "../assets/icons/error-20.svg";
import MessageBlock from "../components/MessageBlock/MessageBlock";
import { BreedHoverButton } from "../components/ImagesGrid/BreedsGrid";
import { getGridElement } from "../components/ImagesGrid/gridHelper";
import defaultImage from "../assets/images/upload-bg.png";

const SearchPage = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetBreedsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => {
      const breeds = data?.filter((item) => item.name.toLowerCase().includes(name!.toLowerCase()));
      return {
        isLoading,
        data: breeds,
      };
    },
  });

  return (
    <div className={styles.pageWrapper}>
      <PageHeader pageName="search">
        <></>
      </PageHeader>
      <p className="text-xl text-gray-500 mb-3 dark:text-gray-300">
        Search results for: "<span className="text-black font-medium dark:text-white">{name}</span>"
      </p>
      {isLoading ? (
        <Loader size="large" />
      ) : data && data.length !== 0 ? (
        <ImagesGrid
          elements={data.map((breed) => {
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
          icon={<Error />}
          color="gray"
          innerContent={`No results found for name: ${name}...`}
        />
      )}
    </div>
  );
};

export default SearchPage;
