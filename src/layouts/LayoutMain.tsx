import React from "react";
import LeftSectionContent from "../conteiners/LeftSectionContent";
import { Outlet } from "react-router-dom";

const LayoutMain: React.FC = () => {
  return (
    <>
      <LeftSectionContent />
      <Outlet />
    </>
  );
};

export default LayoutMain;
