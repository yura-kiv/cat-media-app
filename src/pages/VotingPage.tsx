import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import styles from "./styles/Pages.module.css";
import { CatImageRes } from "../models/catApi";
import { catApiThunk } from "../services/api";
import Loader from "../components/Loader/Loader";
import MessageBlock from "../components/MessageBlock/MessageBlock";
import { ReactComponent as Error } from "../assets/icons/error-20.svg";
import UserLogsTable from "../conteiners/UserLogsTable";
import { VoteButtonsBlock } from "../components/VoteButtonsBlock/VoteButtonsBlock";
import { subID } from "..";

const VotingPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<CatImageRes | undefined>(undefined);
  const [error, setError] = useState(null);
  const [reaction, setReaction] = useState<boolean>(true);

  const loadNewImage = () => {
    setLoading(true);
    setImage(undefined);
    setError(null);
    catApiThunk
      .get(`images/search?limit=1&size=full&sub_id=${subID}`)
      .then((response) => {
        setLoading(false);
        setImage(response.data[0]);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    if (reaction) {
      loadNewImage();
      setReaction(false);
    }
  }, [reaction]);

  return (
    <div className={styles.pageWrapper}>
      <PageHeader pageName="VOTING">
        <></>
      </PageHeader>
      {error === null ? (
        <div className="relative w-full h-96 rounded-2xl bg-gray-100 mb-10">
          {loading ? (
            <div className="h-full w-full flex items-center justify-center">
              <Loader size="large" />
            </div>
          ) : image ? (
            <img
              className="absolute w-full h-full object-cover rounded-2xl"
              src={image.url}
              alt={image.id + " image for voting"}
            />
          ) : (
            <></>
          )}
          <VoteButtonsBlock
            imageInfo={image}
            setReaction={setReaction}
          />
        </div>
      ) : (
        <MessageBlock
          color="gray"
          icon={<Error />}
          innerContent={"Error to fetch image :^("}
        />
      )}
      <UserLogsTable categories={["dislike", "favourite", "like"]} />
    </div>
  );
};

export default VotingPage;
