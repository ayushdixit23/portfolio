import React, { useRef } from "react";
import TerminalComponent from "./TerminalComponent";
import OrbitComponent from "./OrbitComponent";
import { IconCloudDemo } from "./IconCloud";
import CodeComponent from "./CodeComponent";
import AnimationBeamComponent from "./AnimationBeamComponent";
import { Globe } from "@/components/Globe";
import { motion, useInView } from "motion/react";

const AboutMeGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const color = "#4AD991";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center sm:mb-12 items-center max-w-[1200px] mx-auto mt-12 w-full"
    >
      {/* Mobile And Desktop */}
      <div className="grid grid-cols-1 sm:max-lg:hidden lg:grid-cols-3 px-3 gap-4 w-full">
        <div className="flex flex-col gap-4 w-full">
          <motion.div
            whileHover={{
              y: -5,
              boxShadow: `0 10px 25px -5px ${color}20`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full h-[300px] md:h-[260px] rounded-3xl border border-white/10 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          >
            <IconCloudDemo />
          </motion.div>

          <motion.div
            whileHover={{
              y: -5,
              boxShadow: `0 10px 25px -5px ${color}20`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full h-[360px] md:h-[380px] rounded-3xl border border-white/10 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          >
            <Globe />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <motion.div
            whileHover={{
              y: -5,
              boxShadow: `0 10px 25px -5px ${color}20`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full  md:h-[320px] rounded-3xl border border-white/10 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          >
            <TerminalComponent />
          </motion.div>

          <motion.div
            whileHover={{
              y: -5,
              boxShadow: `0 10px 25px -5px ${color}20`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full  md:h-[320px] rounded-3xl border border-white/10 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          >
            <AnimationBeamComponent />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <motion.div
            whileHover={{
              y: -5,
              boxShadow: `0 10px 25px -5px ${color}20`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full h-[380px] rounded-3xl border border-white/10 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          >
            <OrbitComponent />
          </motion.div>

          <motion.div
            whileHover={{
              y: -5,
              boxShadow: `0 10px 25px -5px ${color}20`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full md:h-[260px] rounded-3xl border border-white/10 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          >
            <CodeComponent />
          </motion.div>
        </div>
      </div>

      {/* Tablet */}
      <div className="sm:max-lg:grid grid-cols-2 hidden px-3 gap-4 w-full">
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: `0 10px 25px -5px ${color}20`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full h-[350px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform">
          <IconCloudDemo />
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
            boxShadow: `0 10px 25px -5px ${color}20`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full h-[350px]  rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform">
          <Globe />
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
            boxShadow: `0 10px 25px -5px ${color}20`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full  h-[350px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform">
          <TerminalComponent />
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
            boxShadow: `0 10px 25px -5px ${color}20`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full h-[350px]  rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform">
          <AnimationBeamComponent />
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
            boxShadow: `0 10px 25px -5px ${color}20`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full h-[350px]  rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform">
          <OrbitComponent />{" "}
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
            boxShadow: `0 10px 25px -5px ${color}20`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full h-[350px]  rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform">
          <CodeComponent />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMeGrid;
