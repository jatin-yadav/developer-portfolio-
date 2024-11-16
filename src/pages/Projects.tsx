import { planto, elite_estate, dallecloud } from "@/assets"
import ProjectDisplay from "@/components/ProjectDisplay"
import { styles } from "@/styles"

const projectList = [
    {
        projectName: "Planto: Breath Natural",
        isReversed: false,
        livelink: "",
        githublink: "https://github.com/jatin-yadav",
        img: planto,
        desc: "The purpose of this project is to create an engaging and user-friendly e-commerce platform dedicated to selling plants and promoting a natural lifestyle. The website, named Planto, is designed to cater to individuals passionate about greenery, interior decor, or sustainable living. It combines modern design principles with a nature-inspired aesthetic to create an inviting digital experience.",
        skills: [
            { skill: "typescript", color: "bg-green" },
            { skill: "shadcn ui", color: "bg-indigo" },
            { skill: "recoil", color: "bg-sky" },
            { skill: "tailwind", color: "bg-orange" },
            { skill: "react", color: "bg-pink" },
            { skill: "HTML", color: "bg-teal" },
            { skill: "css", color: "bg-red" },
        ]
    },
    {
        projectName: "Elite-Estate: Perfect Real Estate",
        isReversed: true,
        livelink: "https://elite-estate-eight.vercel.app/",
        githublink: "https://github.com/jatin-yadav/Elite-Estate",
        img: elite_estate,
        desc: "Elite-Estate: Perfect Real Estate is to serve as a comprehensive and user-friendly platform for individuals looking to buy, sell, or rent properties with ease. Designed to meet the needs of modern real estate customers, this project aims to create a seamless experience for users by combining elegant design with powerful functionality. Whether you're searching for a dream home, listing a property for sale, or exploring rental options, Elite-Estate offers a centralized hub tailored to provide personalized solutions.",
        skills: [
            { skill: "typescript", color: "bg-green" },
            { skill: "shadcn ui", color: "bg-indigo" },
            { skill: "recoil", color: "bg-sky" },
            { skill: "tailwind", color: "bg-orange" },
            { skill: "next", color: "bg-pink" },
            { skill: "css", color: "bg-red" },
            { skill: "mongodb", color: "bg-yellow" },
        ]
    },
    {
        projectName: "DALL·E Dreamscapes: Community Place",
        isReversed: false,
        livelink: "https://dallecloud.netlify.app/",
        githublink: "https://github.com/jatin-yadav/dall-e",
        img: dallecloud,
        desc: "DALL·E Dreamscapes: Community Place is an innovative platform designed to bring creativity and collaboration together, where users can explore, create, and share breathtaking AI-generated art. At its core, this project leverages the power of AI tools like DALL·E to provide a space where individuals from all walks of life—artists, designers, hobbyists, or anyone passionate about visual storytelling—can transform their ideas into stunning dreamlike imagery. The platform’s community-driven approach encourages users to connect, exchange ideas, and inspire one another through their creative works.",
        skills: [
            { skill: "typescript", color: "bg-green" },
            { skill: "shadcn ui", color: "bg-indigo" },
            { skill: "zustand", color: "bg-green" },
            { skill: "tailwind", color: "bg-orange" },
            { skill: "next", color: "bg-pink" },
            { skill: "AI", color: "bg-purple" },
            { skill: "css", color: "bg-red" },
        ]
    },
]

const Projects = () => {
    return (
        <section id="projects" className="pt-12 bg-background-1">
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center text-content`}>
                <h1 className="text-4xl tracking-wide font-bold">Latest Projects</h1>
                {projectList.map((project, index) => {
                    return (
                        <ProjectDisplay key={index} project={project} />
                    )
                })}
            </div>
        </section>
    )
}

export default Projects