import { cssLogo, dockerLogo, figmaLogo, gitLogo, htmlLogo, javascriptLogo, mongodbLogo, nodejsLogo, reactjsLogo, reduxLogo, tailwindLogo, typescriptLogo } from "@/assets"
import SkillsBox from "@/components/SkillsBox"
import { styles } from "@/styles"

const Skills = () => {
    return (
        <section id="skills" className="pt-12 bg-secondary">
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center text-content`}>
                <h1 className="text-4xl tracking-wide font-bold">My Skills</h1>
                {/* <div className="max-w-7xl w-full flex flex-col sm:flex-row justify-between items-center  pt-16 gap-4 "> */}
                <div className="max-w-7xl w-full pt-16 grid grid-cols-12">
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='CSS' imgSrc={cssLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='Doker' imgSrc={dockerLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='Figma' imgSrc={figmaLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='GitHub' imgSrc={gitLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='HTML' imgSrc={htmlLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='JavaScript' imgSrc={javascriptLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='MongoDB' imgSrc={mongodbLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='ExpressJS' imgSrc={nodejsLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='ReactJS' imgSrc={reactjsLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='Redux' imgSrc={reduxLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='TailwindCss' imgSrc={tailwindLogo} />
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-6 md:p-8 p-3">
                        <SkillsBox skill='TypeScript' imgSrc={typescriptLogo} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills