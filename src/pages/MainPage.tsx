import React from "react";
import girlAndPetImg from "../assets/images/girl-and-pet.png";

const MainPage: React.FC = () => {
  return (
    <div className="relative w-1/2 h-screen py-5 px-10 ">
      <div className="bg-red-300 w-full h-[calc(100vh-90px)] rounded-3xl"></div>
      <img
        className="absolute top-0 right-0 w-full h-full object-cover"
        src={girlAndPetImg}
        alt="Girl with pet main page photo"
      ></img>
    </div>
  );
};

export default MainPage;
