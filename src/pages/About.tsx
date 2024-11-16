import { styles } from "@/styles"
import { aboutImg } from "../assets";
import { useRecoilValue } from "recoil";
import { themesAtom } from "../store/atoms/themesAtom";
import { Button } from "@/components/ui/button";



const About = () => {
    const theme = useRecoilValue(themesAtom)
    return (
        <section id='about'>
            <div className={`${styles.paddingX} ${styles.paddingY} bg-background-1 flex flex-col items-center justify-center`}>
                <div className="max-w-7xl flex flex-col lg:flex-row justify-center items-center  pt-10 gap-4">
                    <div className="w-full lg:w-5/12 flex justify-center">
                        <div className={`${theme === 'dark' ? 'bg-primary' : ""} rounded-md w-96`}>
                            <img src={aboutImg} alt="aboutImg" />
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 px-6 tracking-wide text-accent-2">
                        {/* <h1 className="text-xl tracking-wide lg:text-start text-center font-bold">About Me</h1> */}
                        <h1 className="text-4xl tracking-wide font-bold py-4 text-content">Curious about me? Here you have it:</h1>
                        <p className="py-2 text-pretty">Hi, 👋 I'm <span className="font-semibold text-content">Jatin Yadav</span>, a <span className="font-semibold text-content">Full Stack Developer </span> with over <span className="font-semibold text-content">2.5 years of experience</span> in designing and developing web applications. My expertise lies in the <span className="font-semibold text-content">MERN stack</span>, with a deep understanding of both front-end and back-end technologies such as <span className="font-semibold text-content">React, Node.js, Express.js, & MongoDB.</span> I am passionate about building scalable, high-performance applications that deliver seamless user experiences.</p>
                        <p className="py-2 text-pretty">With a solid foundation in <span className="font-semibold text-content">JavaScript, TypeScript, Next.js, Tailwind CSS,</span> and database management using both <span className="font-semibold text-content">SQL & NoSQL</span> databases, I have continued to grow and evolve as a developer, embracing new challenges and learning the latest technologies along the way. I’m always looking for opportunities to contribute to innovative projects that drive technological advancement. I am very much a progressive thinker and enjoy working on products end-to-end—from ideation through to development.<span className="font-semibold text-content"> My work is driven by a passion for clean code, enhanced user experiences, and technical excellence.</span></p>
                        <p>
                            You can follow me on social media, where I share tech-related insights.
                            <br />Finally, some quick bits about me.
                            <li>B.Tech - in Computer Science & Engineering</li>
                            <li>Avid learner</li>
                            Feel free to reach out and say hello—I’m as friendly as a well-commented codebase!
                        </p>
                        <div className="flex gap-4 py-6">
                            <a href='#contact'>
                                <Button>Hire Me</Button>
                            </a>
                            <a href='https://drive.google.com/file/d/1evDWQ55y16c1El88qHppiZI8G24cMIKj/view?usp=sharing' target="_blank">
                                <Button variant={"outline"}>Download CV</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
// export default SectionWrapper(About, "about");