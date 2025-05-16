"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <div className="relative z-50">
            <div className="flex justify-between items-center py-7 px-4 md:px-0 w-full">
                <Link href={"/"}>
                    <h1 className="text-xl sm:text-2xl md:text-[26px] cursor-pointer text-initial bg-gradient-white-top font-bold">
                        {`<Ayush Dixit />`}
                    </h1>
                </Link>

                <div className="hidden md:block">
                    <nav>
                        <ul className="flex gap-8">
                            <li>
                                <Link
                                    href="/#home"
                                    className="hover:text-[#E6E6E6] text-[#E6E6E6] cursor-pointer"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                             
                                    href="/#about"
                                    className="hover:text-[#E6E6E6] text-[#E6E6E6]/50 cursor-pointer"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#projects"
                                    className="hover:text-[#E6E6E6] text-[#E6E6E6]/50 cursor-pointer"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#blog"
                                    className="hover:text-[#E6E6E6] text-[#E6E6E6]/50 cursor-pointer"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="hover:text-[#E6E6E6] text-[#E6E6E6]/50 cursor-pointer"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="hidden md:block">
                    <button className="bg-[#E6E6E6] text-sm font-bold text-black px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 flex items-center gap-x-1">
                        Let's Talk
                        <GoArrowUpRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="md:hidden z-50">
                    <button onClick={toggleMenu} className="text-[#E6E6E6]">
                        {isOpen ? (
                            <HiOutlineX size={28} />
                        ) : (
                            <HiOutlineMenuAlt3 size={28} />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black px-6 py-10 md:hidden z-40"
                    >
                        <ul className="flex flex-col gap-6 text-lg">
                            <li className="text-[#E6E6E6] cursor-pointer">Home</li>
                            <li className="text-[#E6E6E6]/70 cursor-pointer">About</li>
                            <li className="text-[#E6E6E6]/70 cursor-pointer">Projects</li>
                            <li className="text-[#E6E6E6]/70 cursor-pointer">Blog</li>
                            <li className="text-[#E6E6E6]/70 cursor-pointer">Contact</li>
                            <button className="mt-4 bg-[#E6E6E6] text-sm font-bold text-black px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 flex items-center gap-x-1 w-max">
                                Let's Talk
                                <GoArrowUpRight className="w-5 h-5" />
                            </button>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
