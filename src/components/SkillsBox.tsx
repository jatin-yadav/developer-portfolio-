const SkillsBox = ({ skill, imgSrc }: { skill: string, imgSrc: string }) => {
    return (
        <div className="border-2 border-background-2 rounded-md p-4 flex flex-col justify-center items-center bg-background-2">
            <div className="p-4 font-extrabold">
                <img src={imgSrc} alt="" />
            </div>
            <div className="text-xl font-bold">
                {skill}
            </div>
        </div>
    )
}

export default SkillsBox