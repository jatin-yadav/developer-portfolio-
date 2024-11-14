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
        description: 'Conducted performance testing to ensure system stability under load, achieving a 30% improvement in response time. Led end-to-end web development, cutting development time by 25% with optimized workflows. Implemented a streamlined digital process flow for efficient policy issuance and management, enhancing user experience and boosting operational efficiency by 50%. Collaborated with UI/UX designers to optimize user interfaces, improving customer engagement by 40%'
    },
    {
        companyName: "Bharat Claims",
        companyLogo: bharat_claims_logo,
        companyColor: 'bg-orange-700',
        position: " Software Development Executive",
        timePeriod: "May 2022 - Dec 2023",
        description: " Created a secure .exe application with embedded website access and password protection, boosting data security and contributing to a 20% increase in company sales. Maintained PHP CodeIgniter backend for a garage management app, reducing downtime by 15% and ensuring consistent operation. Developed the backend using ExpressJS to enhance battery management and sales tracking for distributors, reducing stock check and tracking time by 50%. Optimized client-side JavaScript, cutting JS bundle size by 25% and decreasing page load time by 40% for faster performance."
    },
    {
        companyName: " Senior World",
        companyLogo: seniorworld_logo,
        companyColor: 'bg-red-800',
        position: " Software Developer",
        timePeriod: "Oct 2021 - Apr 2022",
        description: " Improved the codebase and enhanced comments for better readability & maintainability, reducing code comprehension by 50% for others. Managed bulk messaging via third-party API, achieving a 98% delivery success rate for customer notifications. Performed thorough user testing on mobile applications, identifying and reporting critical bugs, which reduced post-release issues by 20% and improved app stability"
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