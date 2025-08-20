"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUsDiv from "./ui/aboutUsDiv";
import { aboutUsData } from "./data/aboutUsData";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroSec = () => {
  const mainRef = useRef(null);
  const modelRef = useRef(null);
  const level2Ref = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const aboutUsDivRefs = useRef([]);
  const StagDivRef = useRef(null);

  return (
    <div
      ref={mainRef}
      className="flex relative flex-col justify-center items-center w-full pt-[100px]"
    >
      <div
        ref={StagDivRef}
        className="h-[60vh] w-full flex justify-center items-center flex-col gap-3 font-light text-center"
      >
        <div className="  text-white text-[4vw] max-sm:text-2xl  ">
          ✦ Where Vision
          <span className=" italic m-4 underline font-medium ">
            ꕤ Meets{" "}
          </span>{" "}
          Voice.
        </div>
        <div className="text-white">
          Ideas crafted through clarity, shared through{" "}
          <span className=" italic">sound</span> — inspiring Jaipur{" "}
          <span className=" italic font-medium">one</span> voice at a time.
        </div>
      </div>

      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        className="w-[90vw]  object-cover gradient rounded-3xl shadow-xl backdrop-blur-xs"
        src="http://res.cloudinary.com/dz12pywzs/video/upload/v1751637768/znzhifks76yy8bgvgikn.mp4"
      ></video>

      <div
        ref={level2Ref}
        className="flex flex-col md:flex-row justify-center items-center min-h-[60vh] md:h-screen w-full overflow-hidden gap-4 relative p-4"
      >
        <div
          ref={modelRef}
          className="absolute hidden md:flex h-full w-full items-center justify-center"
          style={{ pointerEvents: "none" }}
        ></div>
        {aboutUsData.map((item, index) => (
          <AboutUsDiv
            ref={(el) => (aboutUsDivRefs.current[index] = el)}
            key={index}
            hv1={item.hv1}
            hv2={item.hv2}
            dv1={item.dv1}
            dv2={item.dv2}
            p={item.p}
            className={`w-full md:w-[30%] ${index === 1 ? "z-10" : ""} `}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSec;
