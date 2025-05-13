import Image from "next/image";
import ChatImage from "../public/assets/chatproject.png";

const BlogCard = ({ isMain = false }) => {
    const authorImage = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000";

    return (
        <div
            className={`border rounded-3xl border-[#3ECF8E]/10 shadow-[inset_0px_32px_64px_0px_rgba(62,207,142,0.08),inset_1px_1px_1px_-0.5px_rgba(62,207,142,0.50),inset_0px_0px_1px_0px_rgba(255,255,255,0.40)] flex flex-col gap-4 overflow-hidden ${
                isMain ? "p-3 h-full" : "p-2 h-full"
            }`}
        >
            <div className={`w-full rounded-3xl overflow-hidden ${isMain ? "flex-1 aspect-video" : "aspect-video"}`}>
                <Image src={ChatImage} alt="Chat Project" className="w-full h-full object-cover" />
            </div>
            <div
             className={`p-3 flex flex-col  ${isMain ? "gap-3" : "gap-1"}`}>
       
                <div className={`${isMain ? "text-xl" : "text-lg"} text-white font-medium`}>
                    How to hack Google?
                </div>
                <p className={`${isMain ? "" : "text-sm"}`}>
                    Google hacked by me — see without internet and you get 404 😎
                </p>
                <div
                 className="flex mt-3 items-center gap-3">
                    <div className={`rounded-full overflow-hidden ${isMain ? "w-10 h-10" : "w-8 h-8"}`}>
                        <img
                            src={authorImage}
                            alt="Author"
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className={`text-white/90 font-semibold ${isMain ? "" : "text-sm"}`}>
                        Ayush Dixit
                    </div>
                    <div className="w-2 h-2 bg-[#0FEE9E] rounded-full"></div>
                    <div className="text-sm font-medium">December 2, 2018</div>
                </div>
            </div>
        </div>
    );
};

// export default BlogCard;


const BlogsPostHero = () => {
    return (
        <div className="text-white/70 flex px-4 py-8 w-full gap-4">
            <div className="h-[600px] w-[62%]">
                <BlogCard isMain />
            </div>
            <div className="h-[600px] flex flex-col gap-4 w-[38%]">
                {[1, 2].map((_, index) => (
                    <BlogCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default BlogsPostHero;