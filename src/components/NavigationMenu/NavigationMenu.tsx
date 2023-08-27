import React from "react";
import ImageBlock from "./ImageBlock";
import votingImg from "../../assets/images/vote-table.png";
import breedsImg from "../../assets/images/pet-breeds.png";
import galleryImg from "../../assets/images/images-search.png";
import styles from "./styles/NavigationMenu.module.css";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <nav className="flex items-center gap-4">
      <div>
        <NavLink to="/voting">
          <ImageBlock
            color="purple"
            imgSrc={votingImg}
            alt="Voting menu item"
          />
        </NavLink>
        <NavLink
          to="/voting"
          className={({ isActive, isPending }) =>
            isActive ? [styles.btn, styles.btn_active].join(" ") : styles.btn
          }
        >
          VOTING
        </NavLink>
      </div>
      <div>
        <NavLink to="/breeds">
          <ImageBlock
            color="green"
            imgSrc={breedsImg}
            alt="Voting menu item"
          />
        </NavLink>
        <NavLink
          to="/breeds"
          className={({ isActive, isPending }) =>
            isActive ? [styles.btn, styles.btn_active].join(" ") : styles.btn
          }
        >
          BREEDS
        </NavLink>
      </div>
      <div>
        <NavLink to="/gallery">
          <ImageBlock
            color="yellow"
            imgSrc={galleryImg}
            alt="Voting menu item"
          />
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isActive ? [styles.btn, styles.btn_active].join(" ") : styles.btn
          }
        >
          GALLERY
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationMenu;
