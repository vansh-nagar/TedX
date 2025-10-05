"use client";
import HeroSec from "@/components/HomePage";
import { RiArrowDownLine } from "@remixicon/react";

import Benifits from "@/components/benifits";
import CallToAction from "@/components/callToAction";
import SocialProof from "@/components/socialProof";
import { useState } from "react";
import React from "react";

export default function Home() {
  const [ScrollWhere, setScrollWhere] = useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(isAtBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the bottom of the page
  const [atBottom, setAtBottom] = React.useState(false);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-background dark">

      <HeroSec />
      <Benifits />
      <SocialProof />
      <button
        onClick={() => {
          setScrollWhere(!ScrollWhere);
        }}
        className="bg-white/50 z-50 fixed right-4 bottom-4 p-4 rounded-full animate-pulse md:hidden"
        aria-label="Scroll to bottom"
        type="button"
      >
        {ScrollWhere ? (
          <RiArrowDownLine onClick={scrollToBottom} />
        ) : (
          <RiArrowDownLine className="rotate-180" onClick={scrollToTop} />
        )}
      </button>
    </div>
  );
}
