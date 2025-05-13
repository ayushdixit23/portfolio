"use client";
import React from "react";
import ProjectIndividualComponent from "./ProjectIndividualComponent";
import { AnimatePresence, motion } from "motion/react";

const projects = [
  {
    projectTitle: "AI-Powered Task Manager",
    projectDescription:
      "An intelligent productivity tool that helps users manage daily tasks efficiently using natural language input, smart reminders, and real-time collaboration.",
    features: [
      "AI-based task recognition and auto-categorization.",
      "Real-time collaboration with shared task boards.",
      "Voice input for hands-free task creation.",
      "Smart deadline suggestions based on priority and schedule.",
    ],
    techStack: ["Next.js", "TypeScript", "Firebase", "OpenAI API"],
  },
  {
    projectTitle: "Scalable Chat Application",
    projectDescription:
      "A fast and secure real-time chat app enabling users to send messages, share media, and sync across devices with instant notifications.",
    features: [
      "Real-time messaging with WebSocket for instant delivery.",
      "Media sharing including images, videos, and documents.",
      "Cross-device synchronization for seamless user experience.",
      "Live notifications and read receipts for better engagement.",
    ],
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB"],
  },
  {
    projectTitle: "E-Commerce Analytics Dashboard",
    projectDescription:
      "A powerful dashboard that visualizes sales, user behavior, and marketing performance to help store owners make data-driven decisions.",
    features: [
      "Interactive charts and graphs powered by Chart.js.",
      "Real-time sales and traffic monitoring.",
      "Customizable reports and export options.",
      "Integrated customer segmentation analysis.",
    ],
    techStack: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
  },
  {
    projectTitle: "Fitness & Diet Tracking App",
    projectDescription:
      "A personalized fitness companion that tracks workouts, meal plans, and progress with goal-oriented insights and reminders.",
    features: [
      "Daily workout and calorie logging with reminders.",
      "Personalized diet plans based on goals and preferences.",
      "Progress tracking with visual analytics.",
      "Community challenges and achievement badges.",
    ],
    techStack: ["Flutter", "Django", "SQLite", "Redux"],
  },
];

export const ProjectContent = ({ index }: { index: number }) => {
  return (
    <article className="pl-10">
      <h2 className="text-2xl text-initial bg-gradient-white-top font-bold mb-4">
        {projects[index].projectTitle}
      </h2>
      <p className="mb-6 text-[17px]">{projects[index].projectDescription}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {projects[index].features.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 px-2 text-[15px] text-[#8C8C8C]"
          >
            <span className="text-yellow-500">⭐</span>
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {projects[index].techStack.map((tech) => (
          <span
            key={tech}
            className="border border-white/20 text-sm px-3 py-1 rounded-full shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

const ProjectForLanding = () => {
  const [index, setIndex] = React.useState(0);
  console.log(index);
  return (
    <>
      <div className="w-[100%] gap-10 px-4 flex text-white/70 py-12">
        <div className="overflow-scroll w-[60%] max-h-[500px] flex flex-col gap-[80px]">
          {projects.map((_, i) => (
            <ProjectIndividualComponent
              setIndex={setIndex}
              myIndex={i}
              key={i}
            />
          ))}
        </div>


        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="w-[40%] max-h-[500px] py-6 flex flex-col gap-7"
          >
            <ProjectContent index={index} />
          </motion.div>
        </AnimatePresence>

      </div>
    </>
  );
};

export default ProjectForLanding;
