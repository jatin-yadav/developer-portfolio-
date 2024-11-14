import { linkedInIcon, twitterIcon } from "@/assets"

const BlogPost = ({ isFlexed, blogItem }: {
    isFlexed: boolean, blogItem: {
        blogTitle: string,
        blogImg: string,
        blogLink: string,
        blogContent: string
    }
}) => {
    if (isFlexed) {
        return (
            <div className={`w-full bg-background-2 h-full ${isFlexed ? "flex lg:flex-row flex-col" : ""} `}>
                <div className="lg:w-2/5 w-full">
                    <img src={blogItem.blogImg} className="h-full w-full" alt="blog1" />
                </div>
                <div className="lg:w-3/5 w-full lg:p-4 p-2">
                    <h2 className="text-xl font-bold text-center">
                        {blogItem.blogTitle}
                    </h2>
                    <p className="text-center text-accent-1 hover:text-content">{blogItem.blogContent}</p>
                    <div className="flex justify-between items-baseline pt-2 text-sm text-accent-1">
                        <a href={blogItem.blogLink} target="_blank" className="hover:text-content cursor-pointer">READ MORE</a>
                        <div className="hover:text-content cursor-pointer flex gap-1">
                            <a href="#_" target="_blank" className={`border-2 border-primary bg-accent-1 rounded-full  h-7 w-7 flex justify-center items-center`}>
                                <img src={twitterIcon} alt='icon' height={20} width={20} />
                            </a>
                            <a href="#_" target="_blank" className={`border-2 border-primary bg-accent-1 rounded-full  h-7 w-7 flex justify-center items-center`}>
                                <img src={linkedInIcon} alt='icon' height={20} width={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full bg-background-2 h-full">
            <div className="w-full">
                <img src={blogItem.blogImg} className="w-full" alt="blog1" />
            </div>
            <div className="lg:p-4 p-2">
                <h2 className="text-xl font-bold text-center">
                    {blogItem.blogTitle}
                </h2>
                <p className="text-center text-accent-1 hover:text-content">{blogItem.blogContent}</p>
                <div className="flex justify-between items-baseline pt-2 text-sm text-accent-1">
                    <a href={blogItem.blogLink} target="_blank" className="hover:text-content cursor-pointer">READ MORE</a>
                    <div className="hover:text-content cursor-pointer flex gap-1">
                        <a href="#_" target="_blank" className={`border-2 border-primary bg-accent-1 rounded-full  h-7 w-7 flex justify-center items-center`}>
                            <img src={twitterIcon} alt='icon' height={20} width={20} />
                        </a>
                        <a href="#_" target="_blank" className={`border-2 border-primary bg-accent-1 rounded-full  h-7 w-7 flex justify-center items-center`}>
                            <img src={linkedInIcon} alt='icon' height={20} width={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost