"use client";

import React, { FC, useRef } from "react";
import { motion, useInView, stagger, animate } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaLinux,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiZod,
  SiGithub,
  SiVercel,
  SiPostman,
  SiNextdotjs,
  SiPnpm,
  SiRedux,
} from "react-icons/si";

const techStack = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
  { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
  { icon: <FaReact className="text-cyan-400" />, label: "ReactJS" },
  { icon: <SiRedux className="text-purple-500" />, label: "Redux" },
  { icon: <SiNextdotjs className="text-white" />, label: "NextJS" },
  { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind CSS" },
  { icon: <SiFramer className="text-blue-500" />, label: "Framer Motion" },
  { icon: <SiShadcnui className="text-white" />, label: "Shadcn" },
  { icon: <FaNodeJs className="text-green-500" />, label: "NodeJS" },
  { icon: <SiExpress className="text-white" />, label: "ExpressJS" },
  { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
  { icon: <SiMysql className="text-blue-600" />, label: "MySQL" },
  { icon: <SiPostgresql className="text-blue-400" />, label: "PostgreSQL" },
  { icon: <SiPrisma className="text-white" />, label: "Prisma" },
  { icon: <SiZod className="text-purple-500" />, label: "Zod" },
  { icon: <FaGit className="text-orange-600" />, label: "Git" },
  { icon: <SiGithub className="text-white" />, label: "GitHub" },
  { icon: <SiVercel className="text-white" />, label: "Vercel" },
  { icon: <SiPostman className="text-orange-500" />, label: "Postman" },
  { icon: <FaJava className="text-white" />, label: "Java" },
  { icon: <FaLinux className="text-yellow-400" />, label: "Linux" },
  { icon: <SiPnpm className="text-orange-400" />, label: "pnpm" },
];

const TechStackIcons: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className="text-white/80 py-12 px-6 mb-12">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.2,
            },
          },
        }}
        className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                scale: 0.8,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                },
              },
            }}
            whileHover={{
              y: -5,
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800"
          >
            <div className="text-2xl">{tech.icon}</div>
            <div className="text-sm font-medium">{tech.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStack: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
              },
            }
          : {}
      }
      className="mt-12 flex flex-col w-full "
    >
      <div className="flex flex-col gap-7 mx-auto max-w-4xl h-full justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                  },
                }
              : {}
          }
          className="centralise-text text-initial bg-gradient-white-top text-3xl font-bold"
        >
          My Tech Stack
        </motion.h1>
      </div>
      <TechStackIcons />
    </motion.div>
  );
};

export default TechStack;
