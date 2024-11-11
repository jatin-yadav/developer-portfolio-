import { nora_logo, meesra_logo, seniorworld_logo, bharat_claims_logo } from "@/assets";
import ExperinceDisplay from "@/components/ExperinceDisplay";
import { styles } from "@/styles"

const workExperince = [
    {
        companyName: "Meesra",
        companyLogo: meesra_logo,
        companyColor: 'bg-blue-700',
        position: "Software Engineer",
        timePeriod: "Mar 2024 - Present",
        description: 'As a Software Engineer, I developed responsive, user-centric web interfaces using Next.js, optimized applications for speed, and ensured high-quality graphics and branding. Developed back-end and implemented solutions based on user feedback and done with back-end coding in Node.js and Laravel. Additionally, I managed both SQL and NoSQL databases, created functional documentation, and stayed updated with emerging technologies, contributing to innovative design and development strategies across projects.'
    },
    {
        companyName: "Bharat Claims",
        companyLogo: bharat_claims_logo,
        companyColor: 'bg-orange-700',
        position: " Software Development Executive",
        timePeriod: "May 2022 - Dec 2023",
        description: "I utilized React, Node.js, and Express.js to build dynamic, responsive web applications, focusing on clean, efficient code to boost site responsiveness and user experience. I identified and fixed key bugs, optimized existing features, and ultimately improved performance by 40%. These enhancements ensured a smoother user interaction, aligning with high standards of speed and efficiency across the platform."
    },
    {
        companyName: " Senior World",
        companyLogo: seniorworld_logo,
        companyColor: 'bg-red-800',
        position: " Software Developer",
        timePeriod: "Oct 2021 - Apr 2022",
        description: "As a dedicated web developer, I managed website maintenance, focusing on delivering a seamless performance for a highly engaging experience. Leveraging third-party APIs, I facilitated large-scale SMS communication to keep customers updated efficiently. With a strong eye for detail, I proactively diagnosed and resolved software bugs, continuously enhancing existing codebases. This approach not only improved functionality but also ensured high reliability and usability, making the website more responsive to customer needs and expectations."
    },
    {
        companyName: "Nora Tech",
        companyLogo: nora_logo,
        companyColor: 'bg-blue-900',
        position: "Software Engineer",
        timePeriod: "Apr 2020 - Jul 2020",
        description: "As a dedicated web developer, I managed website maintenance, focusing on delivering a seamless performance for a highly engaging experience. Leveraging third-party APIs, I facilitated large-scale SMS communication to keep customers updated efficiently. With a strong eye for detail, I proactively diagnosed and resolved software bugs, continuously enhancing existing codebases. This approach not only improved functionality but also ensured high reliability and usability, making the website more responsive to customer needs and expectations."
    }

]


const Work = () => {
    return (
        <section id="work" className="pt-12 bg-background-1">
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center text-content`}>
                <h1 className="text-4xl tracking-wide font-bold">My Experience</h1>
                <p className="py-4 text-center font-semibold">Here is a quick summary of my most recent experiences:</p>
                <div className="w-full grid grid-cols-12 gap-6">
                    {workExperince.map((work) => {
                        return (
                            <ExperinceDisplay key={work.companyName} companyName={work.companyName} companyLogo={work.companyLogo} position={work.position} timePeriod={work.timePeriod} companyColor={work.companyColor}>
                                <p className="text-accent-2">{work.description}</p>
                            </ExperinceDisplay>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Work;