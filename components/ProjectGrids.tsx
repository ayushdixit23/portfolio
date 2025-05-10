import Image from "next/image";
import React from "react";
import chatProject from "../public/assets/chatproject.png";

const projectData = [
    {
        title: "Innovative E-commerce Platform",
        category: "Web Development",
        date: "January 2022",
        description:
            "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        image: chatProject,
        alt: "realtime-chatapp",
    },
    {
        title: "Innovative E-commerce Platform",
        category: "Web Development",
        date: "January 2022",
        description:
            "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        image: chatProject,
        alt: "realtime-chatapp",
    },
    {
        title: "Innovative E-commerce Platform",
        category: "Web Development",
        date: "January 2022",
        description:
            "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        image: chatProject,
        alt: "realtime-chatapp",
    },
    {
        title: "Innovative E-commerce Platform",
        category: "Web Development",
        date: "January 2022",
        description:
            "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        image: chatProject,
        alt: "realtime-chatapp",
    },
];

const ProjectGrids = () => {
    return (
        <div className="flex justify-center mb-12 items-center max-w-[1200px] mx-auto mt-12 w-full">
            <div className="grid grid-cols-2 gap-4 w-full">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className=" bg-gradient-to-t from-[#202020] to-[#202020] border border-white/10 flex flex-col rounded-2xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] transition-shadow duration-300">
                        <div className="rounded-2xl overflow-hidden border border-[#1F1F1F] shadow-inner bg-[#1A1A1D]">
                            <Image
                                src={chatProject}
                                alt="realtime-chatapp"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-6">
                            <div>
                                <h1 className="text-[20px] font-semibold text-white">
                                    {project.title}
                                </h1>
                            </div>
                            <div className="flex justify-between items-center font-medium ">
                                <p>{project.category}</p>
                                <p>{project.date}</p>
                            </div>
                            <div>
                                <p className="text-[#8C8C8C] text-[15px]">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGrids;
