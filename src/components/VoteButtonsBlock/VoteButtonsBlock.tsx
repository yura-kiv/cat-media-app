import { ReactComponent as Smile } from "../../assets/icons/like-color-20.svg";
import { ReactComponent as SadSmile } from "../../assets/icons/dislike-color-20.svg";
import { ReactComponent as Heart } from "../../assets/icons/fav-20.svg";
import { useAppDispatch } from "../../hooks/store";
import { useAddFavouriteImageMutation } from "../../store/api/queries/favouritesQuery";
import { useAddVoteImageMutation } from "../../store/api/queries/votesQuery";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./VoteButtonsBlock.module.css";
import { CatImageRes } from "../../models/catApi";
import { setFavouriteLog, setVoteLog } from "../../store/slices/userLogsSlice";
import Loader from "../Loader/Loader";

interface ButtonsBlockProps {
  imageInfo: CatImageRes | undefined;
  setReaction: Dispatch<SetStateAction<boolean>>;
}

export const VoteButtonsBlock: React.FC<ButtonsBlockProps> = ({ imageInfo, setReaction }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [setVote, setVoteStatus] = useAddVoteImageMutation();
  const [setFavourite, setFavouriteStatus] = useAddFavouriteImageMutation();
  const dispatch = useAppDispatch();
  return (
    <div className={styles.reactionBtnsWrapper}>
      <button
        disabled={imageInfo ? false : true}
        onClick={() => {
          setLoading(true);
          setVote({ id: imageInfo?.id!, vote: true })
            .unwrap()
            .then(() => {
              dispatch(setVoteLog({ id: imageInfo?.id!, status: true }));
              setLoading(false);
              setReaction(true);
            })
            .catch(() => {
              setLoading(false);
              alert("Some problems to set like...");
            });
        }}
        className={[styles.reactionBtn, styles.reactionBtn_green].join(" ")}
      >
        <Smile />
      </button>
      <button
        disabled={imageInfo ? false : true}
        onClick={() => {
          setLoading(true);
          setFavourite(imageInfo?.id!)
            .unwrap()
            .then(() => {
              dispatch(setFavouriteLog({ id: imageInfo?.id!, status: true }));
              setLoading(false);
              setReaction(true);
            })
            .catch(() => {
              setLoading(false);
              alert("Some problems to add favourite image...");
            });
        }}
        className={[styles.reactionBtn, styles.reactionBtn_red].join(" ")}
      >
        <Heart />
      </button>
      <button
        disabled={imageInfo ? false : true}
        onClick={() => {
          setLoading(true);
          setVote({ id: imageInfo?.id!, vote: false })
            .unwrap()
            .then(() => {
              dispatch(setVoteLog({ id: imageInfo?.id!, status: false }));
              setLoading(false);
              setReaction(true);
            })
            .catch(() => {
              setLoading(false);
              alert("Some problems to set dislike...");
            });
        }}
        className={[styles.reactionBtn, styles.reactionBtn_yellow].join(" ")}
      >
        <SadSmile />
      </button>
      {loading && (
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60"></div>
          <Loader size="small" />
        </div>
      )}
    </div>
  );
};
