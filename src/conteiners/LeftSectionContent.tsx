import React, { memo } from "react";
import logo from "../assets/images/logo.png";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import { ReactComponent as Paw } from "../assets/icons/paw-logo.svg";
import { ReactComponent as TextLogo } from "../assets/icons/text-logo.svg";
import styles from "./styles/LeftSectionContent.module.css";

const LeftSectionContent: React.FC = memo(() => {
  return (
    <div className="sticky top-8 right-0 w-fit h-fit ml-[8%] mr-3">
      <div className="flex items-center mb-20 justify-between">
        <Link
          to="/"
          className="flex items-center"
        >
          <Paw className="mr-3" />
          <TextLogo className={styles.textLogo} />
        </Link>
        <ThemeToggle />
      </div>
      <span className="block text-5xl font-medium mb-3 dark:text-gray-100">Hi!👋</span>
      <p className="block text-xl font-normal text-gray-400 mb-10">
        Welcome to MacPaw Bootcamp 2023
      </p>
      <p className="block text-xl font-medium mb-3 dark:text-gray-100">
        Lets start using The Cat API
      </p>
      <NavigationMenu />
    </div>
  );
});

export default LeftSectionContent;
