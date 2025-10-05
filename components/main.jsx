import React from "react";
import ThreeDModel from "./HomePage";
import { BentoGridDemo } from "./Bento";
import Navbar from "./bars/navbar";

const Main = () => {
  return (
    <div className="w-full relative h-[2000px]">
      <Navbar />
      <ThreeDModel />
      <BentoGridDemo />
    </div>
  );
};

export default Main;
