import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Icons = ({ Icon }: { Icon: React.ElementType }) => {
    return (
        <div className="bg-[#555555]/10 p-3.5 rounded-full flex justify-center items-center hover:bg-[#555555]/20 transition-all duration-300">
            <Icon size={18} />
        </div>

    )
}


const Contact = () => {
    return (
        <div className="w-full flex justify-center my-16  items-center">
            <div className="flex flex-col gap-8 max-w-[85%] py-16 border border-[#3ECF8E]/20 rounded-3xl bg-[#070312]/10 justify-center items-center">
                <h1 className="text-initial centralise-text bg-gradient-white-top">Let’s Build Something Great Together</h1>
                <p className="text-[20px] text-center max-w-[90%] leading-snug text-white/70">I’m always open to new opportunities, collaborations, or even a quick chat about tech. Whether you have a project in mind or just want to connect — I’d love to hear from you.</p>
                <div className="flex justify-center items-center gap-5">
                    <button className="py-2 px-7 cursor-pointer flex justify-center items-center gap-2 text-white/80 font-medium rounded-full bg-gradient-to-t from-[#06130D] to-[#3ECF8E]">
                        <Mail size={18} />
                        <div>Contact Me</div>
                    </button>

                    <div className="flex gap-3 text-[#3ECF8E]">
                        <Icons Icon={Linkedin} />
                        <Icons Icon={Github} />
                        <Icons Icon={Twitter} />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;
