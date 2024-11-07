import { GithubIcon, ShareIcon } from "@/assets"
import { Badge } from "@/components/ui/badge"
import { useRecoilValue } from "recoil";
import { themesAtom } from "../store/atoms/themesAtom";

const ProjectDisplay = ({ revers, projectImg }: { revers: boolean, projectImg: string }) => {
    const theme = useRecoilValue(themesAtom);

    if (revers) {
        return (
            <>
                <div className={`flex lg:flex-row flex-col-reverse gap-8 lg:py-6 py-2 lg:px-4 px-2 rounded-xl lg:bg-gradient-to-r bg-gradient-to-b ${theme == 'light' ? "from-[#d3c2af] to-[#fbf3e6]" : "from-slate-400 to-slate-800"} my-4`}>
                    <div className="w-full lg:w-6/12 flex flex-col justify-center">
                        <p>Featured  Project</p>
                        <h1 className="md:text-3xl text-2xl font-bold">Example Project</h1>
                        <div className="py-4">
                            <div className="lg:p-4 p-2  rounded-md lg:bg-gradient-to-r bg-gradient-to-b from-background-2 to-slate-400">
                                A web app for visualizing personalized Spotify data. View your
                                top artists, top tracks, recently played tracks, and detailed audio
                                information about each track. Create and save new playlists of
                                recommended tracks based on your existing playlists and more.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum autem ex perspiciatis animi fuga ratione enim qui quam veniam unde!
                                <div className="flex gap-5 justify-end">
                                    <a href="">
                                        <ShareIcon />
                                    </a>
                                    <a href="">
                                        <GithubIcon />
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4 flex lg:gap-4 gap-2 flex-wrap justify-center">
                                <Badge className={`${theme == 'light' ? "bg-green-400" : "bg-green-600"}`} variant="borderless">Badge</Badge>
                                <Badge className={`${theme == 'light' ? "bg-indigo-400" : "bg-indigo-600"}`} variant="borderless">Badge</Badge>
                                <Badge className={`${theme == 'light' ? "bg-teal-400" : "bg-teal-600"}`} variant="borderless">Badge</Badge>
                                <Badge className={`${theme == 'light' ? "bg-sky-400" : "bg-sky-600"}`} variant="borderless">Badge</Badge>
                                <Badge className={`${theme == 'light' ? "bg-yellow-400" : "bg-yellow-600"}`} variant="borderless">Badge</Badge>
                                <Badge className={`${theme == 'light' ? "bg-pink-400" : "bg-pink-600"}`} variant="borderless">Badge</Badge>
                                <Badge className={`${theme == 'light' ? "bg-orange-400" : "bg-orange-600"}`} variant="borderless">Badge</Badge>
                                <Badge className={`${theme == 'light' ? "bg-purple-400" : "bg-purple-600"}`} variant="borderless">Badge</Badge>
                                <Badge className={`${theme == 'light' ? "bg-red-400" : "bg-red-600"}`} variant="borderless">Badge</Badge>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit lg:w-6/12 rounded-xl md:p-4 p-2 bg-black">
                        <img src={projectImg} alt={`${revers}`} />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className={`flex lg:flex-row flex-col gap-8 lg:py-6 py-2 lg:px-4 px-2 rounded-xl lg:bg-gradient-to-r bg-gradient-to-b ${theme == 'light' ? "from-[#d3c2af] to-[#fbf3e6]" : "from-slate-400 to-slate-800"} my-4`}>
                <div className="w-full h-fit xl:w-6/12 rounded-xl md:p-4 p-2 bg-black">
                    <img src={projectImg} alt={`${revers}`} />
                </div>
                <div className="w-full xl:w-6/12 flex flex-col justify-center">
                    <p>Featured  Project</p>
                    <h1 className="md:text-3xl text-2xl font-bold">Example Project</h1>
                    <div className="py-4">
                        <div className="lg:p-4 p-2  rounded-md lg:bg-gradient-to-r bg-gradient-to-b from-background-2 to-slate-400">
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum autem ex perspiciatis animi fuga ratione enim qui quam veniam unde!
                            <div className="flex gap-5 justify-end">
                                <a href="">
                                    <ShareIcon />
                                </a>
                                <a href="">
                                    <GithubIcon />
                                </a>
                            </div>
                        </div>
                        <div className="pt-4 flex lg:gap-4 gap-2 flex-wrap justify-center">
                            <Badge className={`${theme == 'light' ? "bg-green-400" : "bg-green-600"}`} variant="borderless">Badge</Badge>
                            <Badge className={`${theme == 'light' ? "bg-indigo-400" : "bg-indigo-600"}`} variant="borderless">Badge</Badge>
                            <Badge className={`${theme == 'light' ? "bg-teal-400" : "bg-teal-600"}`} variant="borderless">Badge</Badge>
                            <Badge className={`${theme == 'light' ? "bg-sky-400" : "bg-sky-600"}`} variant="borderless">Badge</Badge>
                            <Badge className={`${theme == 'light' ? "bg-yellow-400" : "bg-yellow-600"}`} variant="borderless">Badge</Badge>
                            <Badge className={`${theme == 'light' ? "bg-pink-400" : "bg-pink-600"}`} variant="borderless">Badge</Badge>
                            <Badge className={`${theme == 'light' ? "bg-orange-400" : "bg-orange-600"}`} variant="borderless">Badge</Badge>
                            <Badge className={`${theme == 'light' ? "bg-purple-400" : "bg-purple-600"}`} variant="borderless">Badge</Badge>
                            <Badge className={`${theme == 'light' ? "bg-red-400" : "bg-red-600"}`} variant="borderless">Badge</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDisplay