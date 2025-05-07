import React from "react";
import Navbar from "./Navbar";
import RoleBadges from "./RoleBadges";
import BlurText from "./BlurText";

const Hero = () => {
    return (
        <div className="flex h-[85vh] flex-col max-w-[1300px] mx-auto">
            <Navbar />
            <div className="flex flex-col gap-8 h-full justify-center items-center">
                <div className="flex gap-4 text-[15px]">
                    <RoleBadges text="Full-Stack Web Developer" />
                    <RoleBadges text="Frontend Developer" />
                    <RoleBadges text="Backend Developer" />
                </div>

                <div className="flex flex-col mt-3 gap-10">
                    {/* <div className="w-full flex justify-center items-center ">
                        <h1 className="text-6xl  text-center font-medium leading-snug">
                            {" "}
                            <span className="text-[#3ECF8E]">Hello!</span> I’m Ayush, Crafting
                            Scalable,Stunning & Smart Web Experiences.
                        </h1>
                    </div> */}

                    <BlurText
                        text="Hello! I’m Ayush, Crafting Scalable, Stunning & Smart Web Experiences."
                        delay={150} // Faster animation between words
                        stepDuration={0.2} // Quicker fade-in
                        animateBy="words"
                        direction="top"
                        className="text-6xl text-center font-medium leading-snug"
                    />
                    {/* 
                    <div className="w-full flex justify-center items-center ">
                        <h1 className="text-6xl  text-center font-medium leading-snug">
                            {" "}
                            <span className="text-[#3ECF8E]">Hello!</span> I’m Ayush, Crafting
                            Scalable,Stunning & Smart Web Experiences.
                        </h1>
                    </div> */}


                    {/* <p className="text-center text-[32px]">
                        I build beautiful and scalable digital experiences
                    </p> */}

                    <BlurText
                        text="I build beautiful and scalable digital experiences"
                        delay={300}
                        stepDuration={0.35}
                        animateBy="words"
                        direction="top"
                        className="text-center text-[32px]"
                    />
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
