// import Image from "next/image";
// import React from "react";
// import ChatImage from "../public/assets/chatproject.png";

// const ProjectForLanding = () => {
//   return (
//     <div className="text-white/70 w-full">
//       <div className="flex gap-10 w-full">
//         <div className="w-[60%]">
//           <Image
//             src={ChatImage}
//             alt="chatproject"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-[40%]">
//           <div className="w-full flex flex-col gap-4">
//             <div className="text-xl font-semibold text-white/90">
//               Scalable Chat Application
//             </div>
//             <div className="text-white/80">
//               A fast and secure real-time chat application that enables users to
//               send and receive instant messages, share media, and stay connected
//               across devices with seamless synchronization and live
//               notifications.
//             </div>
//             <ul className="flex flex-col px-4 gap-2">
//               {[
//                 "Leveraged Partial Prerendering and After for faster loading.",
//                 "Implemented secure real-time messaging with Socket.IO.",
//                 "Used Redis and RabbitMQ for efficient background processing.",
//                 "Integrated NextAuth for seamless authentication.",
//               ].map((point, idx) => (
//                 <li key={idx} className="flex text-[15px] text-[#8C8C8C] items-start gap-2">
//                   <span>⭐</span>
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex flex-wrap gap-2 mt-4">
//               {[
//                 "Next.js",
//                 "Tailwind CSS",
//                 "Zustand",
//                 "React Query",
//                 "NextAuth",
//                 "TypeScript",
//                 "Express.js",
//                 "MongoDB",
//                 "Redis",
//                 "RabbitMQ",
//                 "Socket.IO",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 text-sm font-medium text-white bg-blue-600/80 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectForLanding;

import Image from "next/image";
import React from "react";
import ChatImage from "../public/assets/chatproject.png";

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

          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={ChatImage}
              alt="Chat Project"
              className="rounded-xl w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
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
