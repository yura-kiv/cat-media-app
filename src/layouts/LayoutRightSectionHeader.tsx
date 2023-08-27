import React from "react";
import RightSectionHeader from "../conteiners/RightSectionHeader";
import { Outlet } from "react-router-dom";

const LayoutRightSectionHeader = () => {
  return (
    <div className="right-section-content relative w-1/2 pr-5">
      <RightSectionHeader />
      <Outlet />
    </div>
  );
};

export default LayoutRightSectionHeader;
