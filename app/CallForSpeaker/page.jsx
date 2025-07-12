import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const page = () => {
  return (
    <div className="flex flex-col  w-full pt-[100px] sm:flex-row items-start">
      <div className="w-full sm:w-1/2  sm:h-full p-10 flex flex-col justify-start items-start">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg text-left">
          TEDxBITJaipur 2026 —{" "}
          <span className="text-red-500">Call for Speakers</span>
        </h1>
        <p className="text-lg text-white/90 max-w-md mb-4 text-left">
          We’re officially opening the stage.
          <br />
          If you believe in the power of ideas to move minds, shift
          perspectives, and spark meaningful change — this is your moment.
        </p>
        <p className="text-lg text-white/90 max-w-md mb-4 text-left">
          TEDxBITJaipur is inviting bold thinkers, quiet visionaries, and
          curious changemakers to be a part of our 2026 speaker lineup. Whether
          you’re a researcher, artist, entrepreneur, educator, or someone with a
          lived experience that the world needs to hear — we welcome your story.
        </p>
        <p className="text-lg text-white/90 max-w-md text-left">
          Before you submit your idea, we encourage you to explore what speaking
          at a TEDx event truly means. TEDx talks are not presentations or
          pitches — they are ideas crafted with care, delivered with clarity,
          and designed to resonate far beyond the room.
        </p>

        <div>
          <button
            className="link opacity-0 px-4 py-2 shadow-md border-4 border-[#eb0028] text-white rounded-xl group relative flex gap-4 hover:pr-10 transition-all duration-300 overflow-hidden"
            type="button"
          >
            Call for Speakers
            <RiArrowRightLine className="w-4 absolute right-4 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </button>
          <button
            className="link opacity-0 px-4 py-2 shadow-md border-4 border-[#eb0028] text-white rounded-xl group relative flex gap-4 hover:pr-10 transition-all duration-300 overflow-hidden"
            type="button"
          >
            Call for Speakers
            <RiArrowRightLine className="w-4 absolute right-4 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </button>
        </div>
      </div>
      <div className="w-full sm:w-1/2 h-1/2 sm:h-full p-10 flex flex-col justify-start items-start">
        <span className="text-3xl font-semibold text-white mb-2 text-left">
          Welcome!
        </span>
        <p className="text-white/90 text-left max-w-sm">
          We are excited to hear from passionate individuals ready to make an
          impact. Click below to start your journey.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-amber-700 font-bold rounded-lg shadow hover:bg-yellow-100 transition self-start">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default page;
