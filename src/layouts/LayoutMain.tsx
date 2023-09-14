import React from "react";
import LeftSectionContent from "../conteiners/LeftSectionContent";
import { Outlet } from "react-router-dom";
import RightSectionHeader from "../conteiners/RightSectionHeader";

const LayoutMain: React.FC = () => {
  return (
    <>
      <LeftSectionContent />
      <Outlet />
    </>
  );
};

export default LayoutMain;
