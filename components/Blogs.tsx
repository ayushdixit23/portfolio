import React from "react";
import BlogsPostHero from "./BlogsPostHero";

const Blogs = () => {
  return (
    <div className="mt-12 flex flex-col gap-[50px] w-full">
      <div className="flex flex-col gap-7 mx-auto max-w-[800px] h-full justify-center items-center">
        <h1 className="centralise-text text-initial bg-gradient-white-top">
         My Blogs
        </h1>
        <p className="text-[20px] text-center leading-snug text-white/70">
          From sleek user interfaces to full-scale applications, here's a
          selection of projects I’m most proud of. Each one tells a story of
          creativity, code, and real-world impact.
        </p>
      </div>
      <BlogsPostHero />
    </div>
  );
};

export default Blogs;
