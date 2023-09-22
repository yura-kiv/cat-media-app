import React from "react";
import girlAndPetImg from "../assets/images/girl-and-pet.png";

const MainPage: React.FC = () => {
  return (
    <div className="relative w-1/2 h-full py-5 px-10 flex items-center justify-center overflow-x-hidden overflow-y-hidden max-lg:hidden">
      <div className="bg-red-300 w-11/12 h-[calc(100vh-90px)] rounded-3xl dark:bg-neutral-700"></div>
      <img
        className="absolute top-0 left-0 w-full min-w-fit"
        src={girlAndPetImg}
        alt="Girl with pet main page"
      ></img>
    </div>
  );
};

export default MainPage;
