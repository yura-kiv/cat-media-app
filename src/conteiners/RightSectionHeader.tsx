import React from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import IconButton from "../components/Buttons/IconButton";
import { ReactComponent as SmileIcon } from "../assets/icons/like-30.svg";
import { ReactComponent as SadSmileIcon } from "../assets/icons/dislike-30.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/fav-30.svg";

const RightSectionHeader = () => {
  return (
    <div className="flex gap-3 mb-5">
      <SearchInput />
      <IconButton
        color="white"
        icon={<SmileIcon />}
        size="large"
      />
      <IconButton
        color="white"
        icon={<HeartIcon />}
        size="large"
      />
      <IconButton
        color="white"
        icon={<SadSmileIcon />}
        size="large"
      />
    </div>
  );
};

export default RightSectionHeader;
