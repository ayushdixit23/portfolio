
"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

interface BlogCardProps {
    post: {
        title: string;
        brief: string;
        url: string;
        coverImage: { url: string };
        publishedAt: string;
        author: {
            name: string;
            profilePicture: string;
        };
        slug: string;
    };
    isMain?: boolean;
}

const BlogCard = ({ post, isMain = false }: BlogCardProps) => {
    if (!post) return null;

    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
    const router = useRouter()
    const truncateText = (text: string, maxLength: number) =>
        text.length > maxLength ? text.slice(0, maxLength).trim() + "..." : text;

    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };
    return (

        <motion.div
        ref={ref}
            onClick={() => {
                router.push(`/blog/${post.slug}`)
            }}
            className={`border rounded-3xl border-[#3ECF8E]/10 shadow-[inset_0px_32px_64px_0px_rgba(62,207,142,0.08),inset_1px_1px_1px_-0.5px_rgba(62,207,142,0.50),inset_0px_0px_1px_0px_rgba(255,255,255,0.40)] flex flex-col gap-4 overflow-hidden ${isMain ? "p-2 sm:p-3 h-full" : "p-2 h-full"
                }`}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div
                className={`w-full rounded-3xl overflow-hidden ${isMain ? "flex-1 aspect-video" : "aspect-video"
                    }`}
            >
                <img
                    src={post.coverImage?.url || "/fallback.jpg"}
                    alt={post.title}
                    width={1200}
                    height={700}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className={`p-2 sm:p-3 flex flex-col ${isMain ? "gap-3" : "gap-3 sm:gap-2"}`}>
                <div className={`${isMain ? "sm:text-xl text-lg" : "text-lg"} text-white font-medium`}>
                    {post.title}
                </div>
                <p className={`${isMain ? "" : "text-sm"} text-white/70`}>
                    {truncateText(post.brief, isMain ? 160 : 120)}
                </p>
                <div className="flex mt-3 items-center gap-3">
                    <div
                        className={`rounded-full overflow-hidden ${isMain ? "sm:w-10 sm:h-10 w-8 h-8" : "w-8 h-8"}`}
                    >
                        <img
                            src={post.author.profilePicture}
                            alt="Author"
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className={`text-white/90 font-semibold ${isMain ? "" : "text-sm"}`}>
                        {post.author.name}
                    </div>
                    <div className="w-2 h-2 bg-[#0FEE9E] rounded-full"></div>
                    <div className="text-sm font-medium">{formattedDate}</div>
                </div>
            </div>
        </motion.div>

    );
};

export default BlogCard;

