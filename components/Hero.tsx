"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import RoleBadges from "./RoleBadges";
import AnimatedButton from "./AnimatedButton";
// import AnimatedLines from "./AnimatedLines";
import { useInView, motion, useScroll, useTransform } from "motion/react";

interface LineWithBeamProps {
  positionClass: string;
}

const LineWithBeam = ({ positionClass }: LineWithBeamProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Properly typing the ref
  const [height, setHeight] = useState<number>(0);
  const [delay] = useState<number>(Math.random() * 0.8);
  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight); // Getting the height properly
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute ${positionClass} top-0 h-full w-[2px] -z-30 line-background overflow-hidden`}
    >
      <div className="absolute top-0 h-20 w-full z-10 pointer-events-none bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl" />
      <div className="absolute bottom-0 h-10 w-full z-10 pointer-events-none bg-gradient-to-b from-black/30 to-transparent backdrop-blur-xl" />

      {height > 0 && (
        <motion.div
          className="w-full h-[80px] bg-[#f1f1f1]/10 rounded-full"
          animate={{
            y: [0, height - 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "backInOut",
            delay,
          }}
        />
      )}
    </div>
  );
};

const HeroLines = () => {
  return (
    <>
      {["-left-1", "left-[150px]", "-right-1", "right-[150px]"].map(
        (pos, idx) => (
          <LineWithBeam key={idx} positionClass={pos} />
        )
      )}
    </>
  );
};

const Hero = () => {
  return (
    <div className="flex h-[90vh] relative flex-col w-full">
      <HeroLines />
      <Navbar />
      <div className="flex flex-col gap-8 h-full justify-center items-center">
        <div className="flex gap-4 text-[15px]">
          <RoleBadges text="Full-Stack Web Developer" />
          <RoleBadges text="Frontend Developer" />
          <RoleBadges text="Backend Developer" />
        </div>

        <div className="flex flex-col mt-3 gap-10">
          <div className="w-full flex justify-center items-center ">
            <h1 className="text-6xl text-initial bg-gradient-white-top text-center font-medium leading-snug">
              {" "}
              {/* text-[#3ECF8E] bg-gradient-to-r from-[#FFFFFF]/65 to-[#fff] */}
              <span className="text-initial bg-gradient-to-r from-[#3ECF8E] to-[#1F6948]">
                Hello!
              </span>{" "}
              I’m Ayush, Crafting Scalable,Stunning & Smart Web Experiences.
            </h1>
          </div>

          <p className="text-center text-initial bg-gradient-white-top text-[32px]">
            I build beautiful and scalable digital experiences
          </p>
          <div className="flex justify-center mt-3 items-center">
            <AnimatedButton>
              <span className="px-3 rounded-full text-white font-bold text-lg ">
                Contact Me
              </span>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
