import { secure, debouncing, monorepoimg } from "@/assets";
import BlogPost from "@/components/BlogPost";
import { styles } from "@/styles"

const blogs = [
    {
        blogTitle: "Keeping User Sessions Safe",
        blogImg: secure,
        blogLink: "https://medium.com/@jatinyadav.dev/keeping-user-sessions-safe-a-guide-to-access-and-refresh-tokens-in-web-authentication-d287967c0bd8",
        blogContent: "In modern web authentication, access and refresh tokens are essential tools for maintaining secure user sessions. Access tokens are short-lived and issued to grant users quick access to resources without the need to reauthenticate. However, once they expire, users would need to log in again—this is where refresh tokens come in. Refresh tokens are longer-lived and securely stored, allowing users to obtain new access tokens without re-entering credentials, thus extending their session seamlessly. This combination helps maintain security while balancing user experience..."
    },
    {
        blogTitle: "Debouncing:Explanation & Implementation",
        blogImg: debouncing,
        blogLink: "https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e",
        blogContent: "Debouncing is a technique that improves performance by limiting the rate at which a function is executed, especially for functions triggered by frequent user interactions. In React, debouncing can be very useful in scenarios like handling input changes in forms, search bars, or any component that listens for frequent, rapid updates.By implementing debouncing, we ensure that a function only executes after the user has stopped interacting for a specified delay, enhancing the user experience."
    },
    {
        blogTitle: "Monorepos: A Comprehensive Guide",
        blogImg: monorepoimg,
        blogLink: "https://medium.com/@jatinyadav.dev/understanding-monorepos-a-comprehensive-guide-9b774a037b10",
        blogContent: "In software development, teams often face a key architectural decision: how to organize and manage codebases. One approach that has gained popularity among developers is the monorepo. Let’s break it down. A monorepo (short for “monolithic repository”) is a single version-controlled repository that houses multiple projects or components all maintained together within the same repository."
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