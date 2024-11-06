const ProjectDisplay = ({ revers, projectImg }: { revers: boolean, projectImg: string }) => {
    if (revers) {
        return (
            <>
                <div className="flex md:flex-row flex-col-reverse gap-8 py-8">
                    <div className="w-full lg:w-6/12 flex flex-col justify-center">
                        <p>Featured  Project</p>
                        <h1 className="md:text-3xl text-2xl font-bold">Example Project</h1>
                        <div className="py-4">
                            <div className="p-4  rounded-md bg-gradient-to-r from-indigo-500">
                                A web app for visualizing personalized Spotify data. View your
                                top artists, top tracks, recently played tracks, and detailed audio
                                information about each track. Create and save new playlists of
                                recommended tracks based on your existing playlists and more.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum autem ex perspiciatis animi fuga ratione enim qui quam veniam unde!
                            </div>
                            {/* <div>
                                <a href="">Link</a>
                                <a href="">GitHub</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 md:p-14 rounded-xl p-4 bg-content">
                        <img src={projectImg} alt={`${revers}`} />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="flex md:flex-row flex-col gap-8 py-8">
                <div className="w-full lg:w-6/12 md:p-14 p-4 rounded-xl bg-content">
                    <img src={projectImg} alt={`${revers}`} />
                </div>
                <div className="w-full lg:w-6/12 flex flex-col justify-center">
                    <p>Featured  Project</p>
                    <h1 className="md:text-3xl text-2xl font-bold">Example Project</h1>
                    <div className="py-4">
                        <div className="p-4  rounded-md bg-gradient-to-r from-indigo-500">
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum autem ex perspiciatis animi fuga ratione enim qui quam veniam unde!
                        </div>
                        {/* <div>
                            <a href="">Link</a>
                            <a href="">GitHub</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDisplay