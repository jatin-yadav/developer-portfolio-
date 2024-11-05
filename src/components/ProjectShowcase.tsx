const ProjectShowcase = ({ revers, projectImg }: { revers: boolean, projectImg: string }) => {
    if (revers) {
        return (
            <div className="max-w-7xl w-full flex flex-col-reverse  sm:flex-row pt-16 gap-4">
                <div className="w-full lg:w-7/12 text-content rounded-lg p-2 bg-accent-1 ">
                    <img src={projectImg} alt="" className="h-80 w-full" />
                </div>
                <div className="w-full lg:w-5/12 md:text-right text-left">
                    <p>Featured  Project</p>
                    <h1 className="text-4xl font-bold">Example Project</h1>
                    <div className="py-4">
                        <div className="p-4  rounded-md bg-gradient-to-r from-indigo-500">
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="max-w-7xl w-full flex flex-col sm:flex-row pt-16 gap-4">
            <div className="w-full lg:w-5/12">
                <p>Featured  Project</p>
                <h1 className="text-4xl font-bold">Example Project</h1>
                <div className="py-4">
                    <div className="p-4  rounded-md bg-gradient-to-r from-indigo-500">
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-7/12 text-content rounded-lg p-2 bg-accent-1 ">
                <img src={projectImg} alt="" className="h-80 w-full" />
            </div>
        </div>
    )
}

export default ProjectShowcase