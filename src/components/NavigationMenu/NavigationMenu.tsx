import React from "react";
import votingImg from "../../assets/images/vote-table.png";
import breedsImg from "../../assets/images/pet-breeds.png";
import galleryImg from "../../assets/images/images-search.png";
import styles from "./styles/NavigationMenu.module.css";
import { NavLink } from "react-router-dom";

interface ImageBlockProps {
  color: "green" | "purple" | "yellow";
  imgSrc: string;
  alt: string;
  to: string;
  onClick?: () => void;
}

const NavigationImageBlock: React.FC<ImageBlockProps> = ({
  color,
  imgSrc,
  alt,
  to,
  onClick = () => {},
}) => {
  const bgColor = "imgWrapper_" + color;

  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? [styles.imgWrapper, styles[bgColor], styles.imgWrapperActive].join(" ")
          : [styles.imgWrapper, styles[bgColor]].join(" ")
      }
      onClick={onClick}
    >
      <img
        className={styles.img}
        src={imgSrc}
        alt={alt}
      ></img>
    </NavLink>
  );
};

interface NavigationButtonProps {
  to: string;
  text: string;
  onClick?: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ to, text, onClick = () => {} }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isActive ? [styles.btn, styles.btn_active].join(" ") : styles.btn
      }
      to={to}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
};

interface NavigationMenuProps {
  onClick?: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ onClick = () => {} }) => {
  return (
    <nav className="flex items-center gap-4 max-sm:gap-2">
      <div>
        <NavigationImageBlock
          color="purple"
          to="/voting"
          imgSrc={votingImg}
          alt="Voting menu item"
          onClick={onClick}
        />
        <NavigationButton
          to="/voting"
          text="voting"
          onClick={onClick}
        />
      </div>
      <div>
        <NavigationImageBlock
          color="green"
          to="/breeds"
          imgSrc={breedsImg}
          alt="Voting menu item"
          onClick={onClick}
        />
        <NavigationButton
          to="/breeds"
          text="breeds"
          onClick={onClick}
        />
      </div>
      <div>
        <NavigationImageBlock
          color="yellow"
          to="/gallery"
          imgSrc={galleryImg}
          alt="Voting menu item"
          onClick={onClick}
        />
        <NavigationButton
          to="/gallery"
          text="gallery"
          onClick={onClick}
        />
      </div>
    </nav>
  );
};

export default NavigationMenu;
