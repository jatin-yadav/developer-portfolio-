import { cssLogo, dockerLogo, figmaLogo, gitLogo, htmlLogo, javascriptLogo, mongodbLogo, nodejsLogo, reactjsLogo, reduxLogo, tailwindLogo, typescriptLogo } from "@/assets"
import SkillsBox from "@/components/SkillsBox"
import { styles } from "@/styles"

const skillsSet = [
    { skill: "CSS", src: cssLogo },
    { skill: "Docker", src: dockerLogo },
    { skill: "Figma", src: figmaLogo },
    { skill: "GitHub", src: gitLogo },
    { skill: "HTML", src: htmlLogo },
    { skill: "JavaScript", src: javascriptLogo },
    { skill: "MongoDB", src: mongodbLogo },
    { skill: "ExpressJS", src: nodejsLogo },
    { skill: "ReactJS", src: reactjsLogo },
    { skill: "Redux", src: reduxLogo },
    { skill: "TailwindCss", src: tailwindLogo },
    { skill: "TypeScript", src: typescriptLogo },
]
const Skills = () => {
    return (
        <section id="skills" className="pt-12 bg-secondary">
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center text-content`}>
                <h1 className="text-4xl tracking-wide font-bold">My Skills</h1>
                {/* <div className="max-w-7xl w-full flex flex-col sm:flex-row justify-between items-center  pt-16 gap-4 "> */}
                <div className="max-w-7xl w-full pt-16 grid grid-cols-12">
                    {skillsSet.map(({ skill, src }) => {
                        return (
                            <div className="xl:col-span-2 lg:col-span-3 col-span-6 md:p-2 p-1">
                                <SkillsBox skill={skill} imgSrc={src} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills