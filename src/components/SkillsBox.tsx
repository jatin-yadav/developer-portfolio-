const SkillsBox = ({ skill, imgSrc }: { skill: string, imgSrc: string }) => {
    return (
        <div className="border-2 border-background-2 rounded-xl p-4 flex flex-col justify-center items-center bg-background-2">
            <div className="p-4 font-extrabold grayscale-0 hover:grayscale">
                <img src={imgSrc} className="md:h-32 h-24" alt={skill} />
            </div>
            <div className="text-xl font-bold">
                {skill}
            </div>
        </div>
    )
}

export default SkillsBox