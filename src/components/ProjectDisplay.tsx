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
                            <div className="p-4 flex gap-5">
                                <a href="">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L15 3M21 3L12 12M21 3V9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke-width="1.5" stroke-linecap="round"></path></svg>
                                </a>
                                <a href="">
                                    <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 rounded-xl md:p-4 p-2 bg-black">
                        <img src={projectImg} alt={`${revers}`} />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="flex md:flex-row flex-col gap-8 py-8">
                <div className="w-full lg:w-6/12 rounded-xl md:p-4 p-2 bg-black">
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
                        <div className="p-4 flex gap-5">
                            <a href="">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L15 3M21 3L12 12M21 3V9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke-width="1.5" stroke-linecap="round"></path></svg>
                            </a>
                            <a href="">
                                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDisplay