"use client";
import { fetchGraphQL } from "@/lib/fetchBlogs";
import { GET_POSTS } from "@/lib/queries";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";

const BlogsPostHero = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchGraphQL(GET_POSTS);
        const posts = data.publication.posts.edges.map((edge: any) => edge.node);
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  if (!posts.length) return null;

  const [mainPost, ...otherPosts] = posts;

  return (
    <div className="text-white/70 flex px-4 py-8 w-full gap-4">
      <div className="h-[750px] w-[62%]">
        <BlogCard post={mainPost} isMain />
      </div>
      <div className="h-[750px] flex flex-col gap-4 w-[38%]">
        {otherPosts.slice(0, 2).map((post: any) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPostHero;
