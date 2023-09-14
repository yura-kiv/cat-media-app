import React, { memo } from "react";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as Heart } from "../../assets/icons/fav-30.svg";
import { ReactComponent as HeartColor } from "../../assets/icons/fav-color-30.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import ImagesGrid from "./ImagesGrid";
import MessageBlock from "../MessageBlock/MessageBlock";
import { ReactComponent as Error } from "../../assets/icons/error-20.svg";
import Loader from "../Loader/Loader";
import {
  useAddFavouriteImageMutation,
  useDeleteFavouriteImageMutation,
  useGetFavouriteImagesQuery,
} from "../../store/api/favouritesQuery";
import { getGridElement } from "./gridHelper";
import { setFavouriteLog } from "../../store/slices/userLogsSlice";
import { useParams } from "react-router-dom";

export const FavouriteHoverButton: React.FC<{ imageId: string }> = ({ imageId }) => {
  const { favourite } = useGetFavouriteImagesQuery(undefined, {
    selectFromResult: ({ data }) => {
      let favourite = undefined;
      if (data) {
        favourite = data.find((item) => item.image_id === imageId);
      }
      return { favourite };
    },
  });
  const [addImageToFavourite, addImageToFavouriteStatus] = useAddFavouriteImageMutation();
  const [deleteImageFromFavourite, deleteImageFromFavouriteStatus] =
    useDeleteFavouriteImageMutation();
  const dispatch = useAppDispatch();

  return (
    <IconButton
      color="white"
      icon={
        addImageToFavouriteStatus.isLoading || deleteImageFromFavouriteStatus.isLoading ? (
          <Loader size="small" />
        ) : favourite ? (
          <HeartColor />
        ) : (
          <Heart />
        )
      }
      size="large"
      className="z-30 transition-colors"
      onClick={() => {
        favourite
          ? (function () {
              deleteImageFromFavourite(favourite.id)
                .unwrap()
                .then(() => dispatch(setFavouriteLog({ id: imageId, status: false })))
                .catch((err) => alert("Some problems to delete from favourites..."));
            })()
          : (function () {
              addImageToFavourite(imageId)
                .unwrap()
                .then(() => {
                  dispatch(setFavouriteLog({ id: imageId, status: true }));
                })
                .catch(() => alert("Some problems to add favourite image..."));
            })();
      }}
    />
  );
};

const GalleryGrid = memo(() => {
  const imagesData = useAppSelector((state) => state.gallerySlice.catImages);

  return (
    <>
      {imagesData.loadingStatus !== "succeeded" ? (
        <Loader size="large" />
      ) : imagesData.data.length !== 0 ? (
        <ImagesGrid
          elements={imagesData.data.map((image) => {
            const { id, url } = image;
            return getGridElement(
              { id, src: url, alt: id + " cat grid image" },
              <FavouriteHoverButton imageId={image.id} />
            );
          })}
        />
      ) : (
        <MessageBlock
          color="gray"
          icon={<Error />}
          innerContent={"Try another filters... Images not found :^("}
        />
      )}
    </>
  );
});

export default GalleryGrid;
