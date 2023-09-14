import React from "react";
import votingImg from "../../assets/images/vote-table.png";
import breedsImg from "../../assets/images/pet-breeds.png";
import galleryImg from "../../assets/images/images-search.png";
import styles from "./styles/NavigationMenu.module.css";
import { NavLink } from "react-router-dom";

type ImageBlockProps = {
  color: "green" | "purple" | "yellow";
  imgSrc: string;
  alt: string;
  to: string;
};

const NavigationImageBlock: React.FC<ImageBlockProps> = ({ color, imgSrc, alt, to }) => {
  const bgColor = "imgWrapper_" + color;

  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? [styles.imgWrapper, styles[bgColor], styles.imgWrapperActive].join(" ")
          : [styles.imgWrapper, styles[bgColor]].join(" ")
      }
    >
      <img
        className={styles.img}
        src={imgSrc}
        alt={alt}
      ></img>
    </NavLink>
  );
};

const NavigationButton: React.FC<{ to: string; text: string }> = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isActive ? [styles.btn, styles.btn_active].join(" ") : styles.btn
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};

const NavigationMenu = () => {
  return (
    <nav className="flex items-center gap-4">
      <div>
        <NavigationImageBlock
          color="purple"
          to="/voting"
          imgSrc={votingImg}
          alt="Voting menu item"
        />
        <NavigationButton
          to="/voting"
          text="voting"
        />
      </div>
      <div>
        <NavigationImageBlock
          color="green"
          to="/breeds"
          imgSrc={breedsImg}
          alt="Voting menu item"
        />
        <NavigationButton
          to="/breeds"
          text="breeds"
        />
      </div>
      <div>
        <NavigationImageBlock
          color="yellow"
          to="/gallery"
          imgSrc={galleryImg}
          alt="Voting menu item"
        />
        <NavigationButton
          to="/gallery"
          text="gallery"
        />
      </div>
    </nav>
  );
};

export default NavigationMenu;
