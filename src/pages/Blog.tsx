import { blog1, blog2, blog3 } from "@/assets";
import BlogPost from "@/components/BlogPost";
import { styles } from "@/styles"

const blogs = [
    {
        blogTitle: "Design is not just what it looks like",
        blogImg: blog1,
        blogContent: "Lorem dolor sit amet, consectetur floralm adipisicing elit, sed do eiusmod tem aincididunt elauta labore eta dolore magna aliqualy eminem faenimveni...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo assumenda odio quisquam, iste, minima ad, labore corporis qui at nobis adipisci sed inventore similique possimus. Ducimus ipsa facere voluptatem. Perspiciatis?"
    },
    {
        blogTitle: "Corporate Branding on finger Tips",
        blogImg: blog2,
        blogContent: "Lorem dolor sit amet, consectetur floralm adipisicing elit, sed do eiusmod tem aincididunt elauta labore eta dolore magna aliqualy eminem faenimveni...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo assumenda odio quisquam, iste, minima ad, labore corporis qui at nobis adipisci sed inventore similique possimus. Ducimus ipsa facere voluptatem. Perspiciatis?"
    },
    {
        blogTitle: "Beautiful Place for Journey",
        blogImg: blog3,
        blogContent: "Lorem dolor sit amet, consectetur floralm adipisicing elit, sed do eiusmod tem aincididunt elauta labore eta dolore magna aliqualy eminem faenimveni...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo assumenda odio quisquam, iste, minima ad, labore corporis qui at nobis adipisci sed inventore similique possimus. Ducimus ipsa facere voluptatem. Perspiciatis?"
    },
]

const Blog = () => {
    return (
        <section id="blog" className="pt-12 bg-accent-1">
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center text-content`}>
                <h1 className="text-4xl tracking-wide font-bold">Blog Post</h1>
                <p className="py-4 font-semibold text-center">Breaking Down Core Concepts to Share Valuable Insights with Readers:</p>
                <div className="grid grid-cols-12 gap-4 max-w-7xl w-full">
                    <div className="lg:col-span-5 col-span-12">
                        <BlogPost isFlexed={false} blogItem={blogs[0]} />
                    </div>
                    <div className=" lg:col-span-7 col-span-12 flex flex-col gap-4">
                        <BlogPost isFlexed={true} blogItem={blogs[1]} />
                        <BlogPost isFlexed={true} blogItem={blogs[2]} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;