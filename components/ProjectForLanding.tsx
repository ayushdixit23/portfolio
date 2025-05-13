import React from "react"
import { Safari } from "./magicui/safari";

const techStack = [
  "Next.js",
  "Tailwind CSS",
  "Zustand",
  "React Query",
  "NextAuth",
  "TypeScript",
  "Express.js",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Socket.IO",
];

const features = [
  "Leveraged Partial Prerendering and After for faster loading.",
  "Implemented secure real-time messaging with Socket.IO.",
  "Used Redis and RabbitMQ for efficient background processing.",
  "Integrated NextAuth for seamless authentication.",
];

const ProjectForLanding = () => {
  return (
    <>
      {Array.from({ length: 4 }, (_, index) => (
        <section
          key={index}
          className="w-full text-white/70  px-4 py-12 grid md:grid-cols-2 gap-10 items-center">

          {/* <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={ChatImage}
              alt="Chat Project"
              className="rounded-xl w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div> */}

          <div className="relative w-full h-full">
            <Safari url="https://chatapp.ayushdixit.site" imageSrc="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=" className="size-full" />
          </div>



          <article className="pl-10">
            <h2 className="text-2xl text-initial bg-gradient-white-top font-bold mb-4">
              Scalable Chat Application
            </h2>
            <p className="mb-6 text-[17px]">
              A fast and secure real-time chat application that enables users to
              send and receive instant messages, share media, and stay connected
              across devices with seamless synchronization and live
              notifications.
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {features.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 px-2 text-[15px] text-[#8C8C8C]">
                  <span className="text-yellow-500">⭐</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/20 text-sm px-3 py-1 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </section>
      ))}
    </>
  );
};

export default ProjectForLanding;
