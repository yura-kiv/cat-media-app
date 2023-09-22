import React from "react";
import LeftSectionContent from "../conteiners/LeftSectionContent";
import { Outlet } from "react-router-dom";

interface LayoutMainProps {
  isShowLeftSectionInMobile: boolean;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ isShowLeftSectionInMobile }) => {
  return (
    <>
      <LeftSectionContent className={isShowLeftSectionInMobile ? "" : "max-lg:hidden"} />
      <Outlet />
    </>
  );
};

export default LayoutMain;
