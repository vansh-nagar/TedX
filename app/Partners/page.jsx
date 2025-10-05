"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-5xl lg:text-7xl mb-3 md:mb-4 leading-tight tracking-tight">
        Partner With Us
      </h1>
      <p className="text-base md:text-xl lg:text-2xl font-light text-muted-foreground max-w-4xl mx-auto mb-6 md:mb-10 leading-relaxed">
        Collaborating with TEDxBITJaipur provides a unique opportunity to
        enhance your organization's global network within the TED and TEDx
        community. Leverage innovative ideas, technology, and local investments
        to empower education and foster innovation, harnessing the
        transformative potential of ideas for a brighter future.
      </p>

      <Link
        href={
          "mailto:partnerships@tedxbitjaipur.com?cc=daksh@tedxbitjaipur.com&subject=Partnership%20Inquiry%20%E2%80%93%20TEDxBITJaipur%202026"
        }
      >
        <Button
          size="xl"
          className={`bg-[#EB0028] hover:bg-red-700 font-extrabold h-12 md:h-14 lg:h-16 text-lg md:text-xl lg:text-2xl transition-all duration-300 ease-in-out hover:scale-[1.03] shadow-lg hover:shadow-2xl px-5 md:px-10 rounded-full text-white w-full md:w-auto`}
        >
          Request Partnership Brochure
        </Button>
      </Link>
    </div>
  );
};

export default page;
