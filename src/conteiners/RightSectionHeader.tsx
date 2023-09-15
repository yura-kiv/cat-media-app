import React, { useState } from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import IconButton from "../components/Buttons/IconButton";
import { ReactComponent as SmileIcon } from "../assets/icons/like-30.svg";
import { ReactComponent as SadSmileIcon } from "../assets/icons/dislike-30.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/fav-30.svg";
import { NavLink } from "react-router-dom";
import styles from "./styles/RightSectionContent.module.css";

interface NavigationIconButtonProps {
  to: string;
  icon: React.ReactNode;
}

const NavigationIconButton: React.FC<NavigationIconButtonProps> = ({ icon, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.activeBtn : "")}
    >
      <IconButton
        color="white"
        icon={icon}
        size="large"
        className={styles.btn}
      />
    </NavLink>
  );
};

const RightSectionHeader = () => {
  return (
    <div className="flex gap-3 mb-5">
      <SearchInput />
      <nav className="flex gap-3">
        <NavigationIconButton
          to="/likes"
          icon={<SmileIcon />}
        />
        <NavigationIconButton
          to="/favourites"
          icon={<HeartIcon />}
        />
        <NavigationIconButton
          to="/dislikes"
          icon={<SadSmileIcon />}
        />
      </nav>
    </div>
  );
};

export default RightSectionHeader;
