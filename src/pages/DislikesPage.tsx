import React from "react";
import styles from "./styles/Pages.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import ImagesGrid from "../components/ImagesGrid/ImagesGrid";
import { useGetVoteImagesQuery } from "../store/api/queries/votesQuery";
import { getGridElement } from "../components/ImagesGrid/gridHelper";
import { ReactComponent as Error } from "../assets/icons/error-20.svg";
import MessageBlock from "../components/MessageBlock/MessageBlock";
import Loader from "../components/Loader/Loader";
import { LikeImageRes } from "../models/catApi";

const DislikesPage = () => {
  const { isError, isLoading, likedImages } = useGetVoteImagesQuery(undefined, {
    selectFromResult: ({ data, isLoading, isError }) => {
      let images: LikeImageRes[] | undefined = undefined;
      if (data) {
        images = data.filter((image) => image.value === -1);
      }
      return { likedImages: images, isLoading, isError };
    },
  });

  return (
    <div className={styles.pageWrapper}>
      <PageHeader pageName="likes">
        <></>
      </PageHeader>
      {isLoading ? (
        <Loader size="large" />
      ) : isError ? (
        <MessageBlock
          color="gray"
          icon={<Error />}
          innerContent={"Having some problems getting disliked pictures..."}
        />
      ) : likedImages && likedImages?.length !== 0 ? (
        <ImagesGrid
          elements={likedImages.map((likeImage) => {
            const { id, image } = likeImage;
            return getGridElement(
              { id: id.toString(), src: image.url, alt: id + " cat grid disliked image" },
              <></>
            );
          })}
        />
      ) : (
        <MessageBlock
          color="gray"
          icon={<Error />}
          innerContent={"You don't have any disliked pictures..."}
        />
      )}
    </div>
  );
};

export default DislikesPage;
