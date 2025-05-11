import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Icons = ({ Icon }: { Icon: React.ElementType }) => {
  return (
    <div className="bg-[#555555]/10 p-3.5 rounded-full flex justify-center items-center hover:bg-[#555555]/20 transition-all duration-300">
      <Icon size={18} />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="w-full flex justify-center my-16  items-center ">
      <div className="flex flex-col gap-8 max-w-[85%] py-16 border border-[#3ECF8E]/20 rounded-3xl bg-[#070312]/10 justify-center items-center shadow-[inset_0px_32px_64px_0px_rgba(62,207,142,0.08),inset_1px_1px_1px_-0.5px_rgba(62,207,142,0.50),inset_0px_0px_1px_0px_rgba(255,255,255,0.40)]">
        <h1 className="text-initial centralise-text bg-gradient-white-top">
          Let’s Build Something Great Together
        </h1>
        <p className="text-[20px] text-center max-w-[90%] leading-snug text-white/70">
          I’m always open to new opportunities, collaborations, or even a quick
          chat about tech. Whether you have a project in mind or just want to
          connect — I’d love to hear from you.
        </p>
        <div className="flex justify-center items-center gap-5">
          <button className="py-2 px-7 cursor-pointer flex justify-center items-center gap-2 text-white/80 font-medium rounded-full  bg-gradient-to-b from-emerald-400 to-emerald-800 ">
            <IoMail size={18} />
            <div>Contact Me</div>
          </button>

          <div className="flex gap-3 text-[#3ECF8E]">
            <Icons Icon={FaLinkedinIn} />
            <Icons Icon={GrGithub} />
            <Icons Icon={RiTwitterXLine} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
