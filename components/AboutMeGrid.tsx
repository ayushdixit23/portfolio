import React from "react";
import TerminalComponent from "./TerminalComponent";
import OrbitComponent from "./OrbitComponent";
import { IconCloudDemo } from "./IconCloud";
import CodeComponent from "./CodeComponent";
import AnimationBeamComponent from "./AnimationBeamComponent";

const AboutMeGrid = () => {
  return (
    <div className="flex justify-center mb-12 items-center max-w-[1200px] mx-auto mt-12 w-full">
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full h-[260px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <IconCloudDemo />
          </div>

          <div className="w-full h-[380px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">

          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full h-[320px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <TerminalComponent />
          </div>

          <div className="w-full h-[320px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
        <AnimationBeamComponent/>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full h-[380px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <OrbitComponent /> </div>

          <div className="w-full h-[260px] rounded-3xl border border-white/20 overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-xl will-change-transform">
            <CodeComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeGrid;
