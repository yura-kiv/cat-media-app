import React from "react";
import logo from "../assets/images/logo.png";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import { Link } from "react-router-dom";

const LeftSectionContent: React.FC = () => {
  return (
    <div className="left-section-wrapper w-fit ml-[8%]">
      <Link to="/">
        <img
          className="mb-20"
          src={logo}
          alt="logo"
        />
      </Link>
      <span className="block text-5xl font-medium mb-3">Hi!👋</span>
      <p className="block text-xl font-normal text-gray-400 mb-10">
        Welcome to MacPaw Bootcamp 2023
      </p>
      <p className="block text-xl font-medium mb-3">Lets start using The Cat API</p>
      <NavigationMenu />
    </div>
  );
};

export default LeftSectionContent;
