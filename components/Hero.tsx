"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import RoleBadges from "./RoleBadges";
import AnimatedButton from "./AnimatedButton";
import AnimatedLines from "./AnimatedLines";
import { motion, stagger } from "motion/react";
import { useAnimate } from "motion/react";

const Hero = () => {
  const sentences = [
    "I'm Ayush, a MERN Stack Developer building scalable web apps.",
    "I craft full-stack, high-performance web applications daily.",
    "Let's build fast, user-focused web experiences together.",
  ];

  const secondLineText = [
    "Specializing in MongoDB, Express, React, and Node.js development.",
    "Delivering clean, scalable code with modern JavaScript tools.",
    "Transforming ideas into smooth and powerful web apps.",
  ];

  const [scope, animate] = useAnimate();
  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    const loopAnimation = async () => {
      if (!scope.current) return;

      await new Promise((resolve) => requestAnimationFrame(resolve));

      await animate(
        scope.current.querySelectorAll("span:not(.no-animate)"),
        { opacity: 1, y: 0, filter: "blur(0px)" },
        { duration: 0.4, ease: "easeInOut", delay: stagger(0.05) }
      );

      await new Promise((resolve) => setTimeout(resolve, 3500));

      await animate(
        scope.current.querySelectorAll("span:not(.no-animate)"),
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { duration: 0.4, delay: stagger(0.05) }
      );

      if (!isCancelled) {
        setCurrentSentence((prev) => (prev + 1) % sentences.length);
      }
    };

    loopAnimation();

    return () => {
      isCancelled = true;
    };
  }, [currentSentence, animate, scope]);

  return (
    <div className="flex md:h-[90vh] relative flex-col w-full">
      <AnimatedLines />
      <Navbar />
      <div className="flex flex-col mt-8 md:mt-0 gap-5 md:gap-8 h-full justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 text-[15px]"
        >
          <RoleBadges text="Full-Stack Web Developer" />
          <RoleBadges text="Frontend Developer" isHidden />
          <RoleBadges text="Backend Developer" isHidden />
        </motion.div>

        <div ref={scope} className="flex px-2 flex-col mt-3 gap-10">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-[28px] sm:text-4xl md:text-[45px] lg:text-6xl text-initial sm:max-w-7xl bg-gradient-white-top text-center font-medium sm:leading-snug">
              <motion.span
                key={0}
                initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                // no-animate
                className="text-initial bg-gradient-to-r from-[#3ECF8E] to-[#4AD991] mr-2"
              >
                Hello!
              </motion.span>

              {sentences[currentSentence].split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  style={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                  className="inline-block px-1 md:px-2 text-initial bg-gradient-white-top text-center font-medium sm:leading-snug"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          <div className="w-full flex justify-center items-center">
            <p className="text-lg sm:text-[26px] px-3 md:text-[32px] text-initial bg-gradient-white-top text-center font-medium sm:leading-snug flex flex-wrap justify-center">
              {secondLineText[currentSentence].split(" ").map((word, index) => (
                <motion.span
                  key={index + 1000}
                  style={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                  className=" text-initial px-1 md:mr-2 inline-block text-transparent bg-gradient-white-top text-center bg-clip-text font-medium sm:leading-snug"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-3 items-center"
          >
            <AnimatedButton>
              <div className="px-3 rounded-full sm:text-lg text-white font-bold ">
                Contact Me
              </div>
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
