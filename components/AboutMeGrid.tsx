import React, { useRef } from "react";
import TerminalComponent from "./TerminalComponent";
import OrbitComponent from "./OrbitComponent";
import { IconCloudDemo } from "./IconCloud";
import CodeComponent from "./CodeComponent";
import AnimationBeamComponent from "./AnimationBeamComponent";
import { Globe } from "@/components/Globe";
import { motion, useInView } from "motion/react"

const AboutMeGrid = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center sm:mb-12 items-center max-w-[1200px] mx-auto mt-12 w-full">

      {/* Mobile And Desktop */}
      <div className="grid grid-cols-1 sm:max-lg:hidden lg:grid-cols-3 px-3 gap-4 w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full h-[300px] md:h-[260px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <IconCloudDemo />
          </div>

          <div className="w-full h-[360px] md:h-[380px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <Globe />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full  md:h-[320px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <TerminalComponent />
          </div>

          <div className="w-full  md:h-[320px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <AnimationBeamComponent />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full  md:h-[380px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <OrbitComponent /> </div>

          <div className="w-full  md:h-[260px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <CodeComponent />
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="sm:max-lg:grid grid-cols-2 hidden px-3 gap-4 w-full">

        <div className="w-full h-[350px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
          <IconCloudDemo />
        </div>

        <div className="w-full h-[350px]  rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
          <Globe />
        </div>


        <div className="w-full  h-[350px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
          <TerminalComponent />
        </div>

        <div className="w-full h-[350px]  rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
          <AnimationBeamComponent />
        </div>


        <div className="w-full h-[350px]  rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
          <OrbitComponent /> </div>

        <div className="w-full h-[350px]  rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
          <CodeComponent />
        </div>

      </div>
    </motion.div>
  );
};

export default AboutMeGrid;
