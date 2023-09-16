import React from "react";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as BackIcon } from "../../assets/icons/back-20.svg";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  pageName: string;
  children: JSX.Element;
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageName, children }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-fit flex items-center mb-3">
      <IconButton
        color="red"
        size="large"
        icon={<BackIcon />}
        onClick={() => {
          navigate(-1);
        }}
      ></IconButton>
      <span className="py-2 px-6 uppercase bg-red-300 text-white rounded-2xl text-xl font-medium tracking-widest ml-3">
        {pageName}
      </span>
      {children}
    </div>
  );
};

export default PageHeader;
