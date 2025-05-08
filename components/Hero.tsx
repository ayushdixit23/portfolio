import React from "react";
import Navbar from "./Navbar";
import RoleBadges from "./RoleBadges";

const Hero = () => {
    return (
        <div className="flex h-[90vh] flex-col w-full">
            <Navbar />
            <div className="flex flex-col gap-8 h-full justify-center items-center">
                <div className="flex gap-4 text-[15px]">
                    <RoleBadges text="Full-Stack Web Developer" />
                    <RoleBadges text="Frontend Developer" />
                    <RoleBadges text="Backend Developer" />
                </div>

                <div className="flex flex-col mt-3 gap-10">
                    <div className="w-full flex justify-center items-center ">
                        <h1 className="text-6xl text-initial bg-gradient-white-top text-center font-medium leading-snug">
                            {" "}
                            {/* text-[#3ECF8E] bg-gradient-to-r from-[#FFFFFF]/65 to-[#fff] */}
                            <span className="text-initial bg-gradient-to-r from-[#3ECF8E] to-[#1F6948]">Hello!</span> I’m Ayush, Crafting
                            Scalable,Stunning & Smart Web Experiences.
                        </h1>
                    </div>

                    <p className="text-center text-initial bg-gradient-white-top text-[32px]">
                        I build beautiful and scalable digital experiences
                    </p>
                    <div className="flex justify-center items-center">
                        <button className="p-3 px-9 rounded-full border border-white/80 text-white font-bold text-lg ">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
