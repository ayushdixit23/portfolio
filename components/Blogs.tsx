"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import BlogsPostHero from "./BlogsPostHero";

const Blogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      id="blog"
      ref={ref}
      className="sm:mt-6 flex flex-col gap-[50px] w-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col gap-7 mx-auto max-w-[800px] h-full justify-center items-center">
        <h1 className="centralise-text text-initial bg-gradient-white-top">
          My Blogs
        </h1>
        <p className="text-[17px] md:text-[20px] md:leading-snug px-3 text-center text-white/70">
          I write about what I learn — from web development to DSA and more. Simple posts, honest thoughts, and things worth sharing as I grow.
        </p>
      </div>
      <BlogsPostHero />
    </motion.div>
  );
};

export default Blogs;
