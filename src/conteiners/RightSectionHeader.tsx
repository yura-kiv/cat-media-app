import React, { Dispatch, SetStateAction, useState } from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import IconButton from "../components/Buttons/IconButton";
import { ReactComponent as SmileIcon } from "../assets/icons/like-30.svg";
import { ReactComponent as SadSmileIcon } from "../assets/icons/dislike-30.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/fav-30.svg";
import { ReactComponent as Burger } from "../assets/icons/burger-menu.svg";
import { ReactComponent as Close } from "../assets/icons/close-20.svg";
import { NavLink } from "react-router-dom";
import styles from "./styles/RightSectionHeader.module.css";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";

interface NavigationIconButtonProps {
  to: string;
  icon: React.ReactNode;
}

interface MobileNavigationMenuProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const MobileNavigationMenu: React.FC<MobileNavigationMenuProps> = ({ isActive, setIsActive }) => {
  const isActiveStyles = isActive
    ? styles.mobileNavigationMenuActive
    : styles.mobileNavigationMenuDisable;
  return (
    <div className={[styles.mobileNavigationMenuWrapper, isActiveStyles].join(" ")}>
      <IconButton
        color="white"
        icon={<Close />}
        size="large"
        className="absolute top-3 right-6 dark:bg-neutral-700"
        onClick={() => setIsActive(false)}
      />
      <NavigationMenu onClick={() => setIsActive(false)} />
    </div>
  );
};

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
  const [isMobileNavigationActive, setIsMobileNavigationActive] = useState<boolean>(false);
  return (
    <>
      <MobileNavigationMenu
        isActive={isMobileNavigationActive}
        setIsActive={setIsMobileNavigationActive}
      />
      <div className="flex items-center gap-3 mb-3 max-sm:flex-wrap max-sm:justify-between">
        <IconButton
          color="white"
          icon={<Burger />}
          size="large"
          className="h-14 w-fit lg:hidden dark:bg-neutral-700 self"
          onClick={() => {
            setIsMobileNavigationActive(!isMobileNavigationActive);
          }}
        />
        <SearchInput />
        <nav className="flex gap-3 w-fit self-center justify-self-end">
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
    </>
  );
};

export default RightSectionHeader;
