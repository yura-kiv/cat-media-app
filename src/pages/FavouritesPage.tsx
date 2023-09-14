import React from "react";
import styles from "./styles/Pages.module.css";
import { ReactComponent as Error } from "../assets/icons/error-20.svg";
import PageHeader from "../components/PageHeader/PageHeader";
import { useGetFavouriteImagesQuery } from "../store/api/favouritesQuery";
import ImagesGrid from "../components/ImagesGrid/ImagesGrid";
import { getGridElement } from "../components/ImagesGrid/gridHelper";
import Loader from "../components/Loader/Loader";
import MessageBlock from "../components/MessageBlock/MessageBlock";
import { FavouriteHoverButton } from "../components/ImagesGrid/GalleryGrid";
import { useAppSelector } from "../hooks/store";
import { getHoursMinutes } from "../helpers/pagesHelper";
import UserLogsTable from "../components/UserLogsTable/UserLogsTable";

const FavouritesPage = () => {
  const favouritesImages = useGetFavouriteImagesQuery();

  return (
    <div className={styles.pageWrapper}>
      <PageHeader pageName="favourites">
        <></>
      </PageHeader>
      {favouritesImages.isLoading ? (
        <Loader size="large" />
      ) : favouritesImages.data?.length !== 0 && favouritesImages.data ? (
        <ImagesGrid
          elements={favouritesImages.data.map((favImage) => {
            const { id, image } = favImage;
            return getGridElement(
              { id: id.toString(), src: image.url, alt: id + " cat grid image" },
              <FavouriteHoverButton imageId={image.id} />
            );
          })}
        />
      ) : (
        <MessageBlock
          color="gray"
          icon={<Error />}
          innerContent={"You don't have any favorite images..."}
        />
      )}
      <UserLogsTable categories={["favourite"]} />
    </div>
  );
};

export default FavouritesPage;
