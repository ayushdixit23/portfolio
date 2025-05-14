"use client";
import React, { useRef } from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { motion, useInView } from "motion/react";

const SocialIcon = ({
  Icon,
  href,
}: {
  Icon: React.ElementType;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-[#555555]/10 p-3.5 rounded-full flex justify-center items-center hover:bg-[#555555]/20 transition-all duration-300"
    >
      <Icon size={18} />
    </a>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full flex-col flex justify-center my-16 items-center">
      <div className="max-w-[85%] overflow-hidden relative">
        <motion.div
          ref={ref} // Attach the ref here
          className="absolute inset-0 bg-[url('/assets/grid.svg')] overflow-hidden -z-20 bg-center w-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView ? 0.06 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>

        <motion.div
          ref={ref} // Attach the ref here
          className="flex flex-col gap-8 w-full z-20 py-16 border overflow-hidden rounded-3xl border-[#3ECF8E]/10 justify-center items-center shadow-[inset_0px_32px_64px_0px_rgba(62,207,142,0.08),inset_1px_1px_1px_-0.5px_rgba(62,207,142,0.50),inset_0px_0px_1px_0px_rgba(255,255,255,0.40)]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
            scale: isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-initial z-10 centralise-text bg-gradient-white-top">
            Let’s Build Something Great Together
          </h1>
          <p className="text-[20px] z-10 text-center max-w-[90%] leading-snug text-white/70">
            I’m always open to new opportunities, collaborations, or even a
            quick chat about tech. Whether you have a project in mind or just
            want to connect — I’d love to hear from you.
          </p>
          <div className="flex justify-center items-center gap-5">
            <a
              href="https://mail.google.com/mail/?view=cm&to=fsayush100@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-7 cursor-pointer flex justify-center items-center gap-2 text-white/80 font-medium rounded-full bg-gradient-to-b from-emerald-400 to-emerald-800 hover:from-emerald-500 hover:to-emerald-900 transition duration-300"
            >
              <IoMail size={18} />
              <div>Contact Me</div>
            </a>

            <div className="flex gap-3 z-10 text-[#3ECF8E]">
              <SocialIcon
                href="https://www.linkedin.com/in/ayushdixitdev/"
                Icon={FaLinkedinIn}
              />
              <SocialIcon
                href="https://github.com/ayushdixit23"
                Icon={GrGithub}
              />
              <SocialIcon
                href="https://x.com/ayushdixitdev"
                Icon={RiTwitterXLine}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
