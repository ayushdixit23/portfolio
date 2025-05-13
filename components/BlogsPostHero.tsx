import { fetchGraphQL } from "@/lib/fetchBlogs";
import { GET_POSTS } from "@/lib/queries";
import BlogCard from "./BlogCard";

const BlogsPostHero = async () => {
  const data = await fetchGraphQL(GET_POSTS);
  const posts = data.publication.posts.edges.map((edge: any) => edge.node);

  const [mainPost, ...otherPosts] = posts;

  return (
    <div className="text-white/70 flex px-4 py-8 w-full gap-4">
      <div className="h-[750px] w-[62%]">
        <BlogCard post={mainPost} isMain />
      </div>
      <div className="h-[750px] flex flex-col gap-4 w-[38%]">
        {otherPosts.slice(0, 2).map((post: any, index: number) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPostHero;