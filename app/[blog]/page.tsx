"use client";
import React, { useEffect, useState } from "react";
import { GET_SINGLE_POST } from "@/lib/queries";// utility function for markdown to HTML
import { fetchParticularBlog } from "@/lib/fetchBlogs";
import { notFound, useParams } from "next/navigation";

interface GetSinglePostData {
    title: string;
    subtitle: string;
    coverImage: {
        url: string;
    };
    content: {
        html: string;
    };
    author: {
        name: string;
        profilePicture: string;
    };

}

const BlogPost = ({ slug }: { slug: string }) => {
    const [post, setPost] = useState<GetSinglePostData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams()

    const variables = {
        publicationId: process.env.NEXT_PUBLIC_HASNODE_USERID,
        slug: params.blog,
        hostname: "ayushdixit.hashnode.dev",
    };


    useEffect(() => {
        setLoading(true);
        const fetchPostData = async () => {
            try {
                const data = await fetchParticularBlog(GET_SINGLE_POST, variables);
                const post = data.publication.post;
                setPost(post);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog post:", error);
                setLoading(false);
            }
        };

        fetchPostData();
    }, [slug]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen text-white/80">Loading...</div>;
    }

    if (!post) {
        return <div>{notFound()}</div>;
    }

    return (
        <div className="text-white/90">
            <img src={post?.coverImage.url} alt="" className="w-full " />
            <h1 className="text-4xl lg:text-6xl text-center leading-relaxed font-bold mt-5">
                {post?.title}
            </h1>
            <p className="my-5 text-center text-xl">{post?.subtitle}</p>
            <div className="my-5 flex items-center justify-center text-lg">
                {post?.author.profilePicture && (
                    <img
                        src={post?.author.profilePicture}
                        alt={post?.author.name}
                        className="rounded-full h-10 w-10 mr-5"
                    />
                )}
                {post?.author.name}
            </div>
            <div
                className="blog-content text-xl leading-loose  flex flex-col gap-5 mt-5"
                dangerouslySetInnerHTML={{ __html: post!.content.html }}
            ></div>
        </div>
    );
};

export default BlogPost;
