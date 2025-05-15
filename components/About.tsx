"use client"
import React, { useRef } from "react";
import AboutMeGrid from "./AboutMeGrid";
import { motion, useInView } from "motion/react"

const About = () => {
  const ref = useRef(null);
 const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-[14vh] flex flex-col gap-[50px] w-full">
        <div className="flex flex-col gap-7 mx-auto max-w-[800px] h-full justify-center items-center">
          <h1 className="centralise-text text-initial bg-gradient-white-top">
            About Me
          </h1>
          <p className="text-[17px] px-3 md:text-[20px] text-center md:leading-snug text-white/70">
            Easy to pick up, highly extensible, and extremely scalable Paragon
            provides all the tools developers need to build integrations to
            spec.
          </p>
          <div>
            <button className="py-1.5 px-5 sm:py-2 sm:px-7 text-sm sm:text-base text-white font-medium rounded-full bg-gradient-to-b from-emerald-400 to-emerald-800">
              See developer experience
            </button>
          </div>
        </div>
        <AboutMeGrid />
      </motion.div>
    </>
  );
};

export default About;
