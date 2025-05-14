"use client";
import React, { useEffect, useState } from "react";
import { GET_SINGLE_POST } from "@/lib/queries"; // utility function for markdown to HTML
import { fetchParticularBlog } from "@/lib/fetchBlogs";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

const BlogPost = () => {
    const [post, setPost] = useState<GetSinglePostData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams();

    const variables = {
        publicationId: process.env.NEXT_PUBLIC_HASNODE_USERID,
        slug: params.blog,
        hostname: "ayushdixit.hashnode.dev",
    };

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

    useEffect(() => {
        setLoading(true);

        fetchPostData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-screen text-white/80">
                Loading...
            </div>
        );
    }

    if (!post) {
        return <div>{notFound()}</div>;
    }

    return (
        <div className=" text-gray-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8 max-w-6xl">

                {post?.coverImage?.url && (
                    <img
                        src={post.coverImage.url}
                        alt={post.title}
                        className="cover-image"
                    />
                )}
                <h1 className="post-title">{post?.title}</h1>
                {post?.subtitle && <p className="post-subtitle">{post?.subtitle}</p>}

                <div className="author-section">
                    {post?.author?.profilePicture && (
                        <img
                            src={post.author.profilePicture}
                            alt={post.author.name}
                            className="author-image"
                        />
                    )}
                    <span className="author-name">{post?.author?.name}</span>
                </div>

                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: post?.content?.html || "" }}
                />
            </div>
            <Contact />
            <Footer />
        </div>
    );
};

export default BlogPost;
