import React from "react";
import AboutMeGrid from "./AboutMeGrid";

const About = () => {
  return (
    <>
      <div className="mt-[14vh] flex flex-col gap-[50px] w-full">
        <div className="flex flex-col gap-7 mx-auto max-w-[800px] h-full justify-center items-center">
          <h1 className="centralise-text text-initial bg-gradient-white-top">
            About Me
          </h1>
          <p className="text-[20px] text-center leading-snug text-white/70">
            Easy to pick up, highly extensible, and extremely scalable Paragon
            provides all the tools developers need to build integrations to
            spec.
          </p>
          <div>
            <button className="py-2 px-7 text-white font-medium rounded-full bg-gradient-to-b from-emerald-400 to-emerald-800">
              See developer experience
            </button>
          </div>
        </div>
        <AboutMeGrid />
      </div>
    </>
  );
};

export default About;
