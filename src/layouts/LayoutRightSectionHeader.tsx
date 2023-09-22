import React from "react";
import RightSectionHeader from "../conteiners/RightSectionHeader";
import { Outlet } from "react-router-dom";

const LayoutRightSectionHeader = () => {
  return (
    <div
      id="right-section"
      className="relative w-1/2 pr-5 max-lg:w-full max-lg:px-5"
    >
      <RightSectionHeader />
      <Outlet />
    </div>
  );
};

export default LayoutRightSectionHeader;
