import { styles } from "@/styles"
import { aboutImg } from "../assets";
import { useRecoilValue } from "recoil";
import { themesAtom } from "../store/atoms/themesAtom";
import { Button } from "@/components/ui/button";



const About = () => {
    const theme = useRecoilValue(themesAtom)
    return (
        <section id='about'>
            <div className={`${styles.paddingX} flex items-center justify-center pt-12 bg-background-1`}>
                <div className="max-w-7xl flex flex-col sm:flex-row justify-center items-center gap-4">
                    <div className="w-full lg:w-5/12">
                        <div className={`${theme === 'dark' ? 'bg-primary' : ""} rounded-md w-96`}>
                            <img src={aboutImg} alt="aboutImg" />
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 text-content px-6">
                        <h1 className="text-4xl tracking-wide font-bold py-4">About Me</h1>
                        <p className="py-2">I am a Full Stack Developer with over 2.5 years of experience in designing and developing web applications. My expertise lies in the MERN stack, with a deep understanding of both front-end and back-end technologies such as React, Node.js, Express.js, and MongoDB. I am passionate about building scalable, high-performance applications that provide seamless user experiences.</p>
                        <p className="py-2">With a solid foundation in JavaScript, TypeScript, Next.js, Tailwind CSS, and database management using MySQL and PostgreSQL, I am continuously looking for opportunities to contribute to innovative projects that drive technological advancement. My work is fueled by a passion for clean code, enhanced user experience, and the pursuit of technical excellence.</p>
                        <div className="flex gap-4 py-6">
                            <Button>Hire Me</Button>
                            <Button variant={"outline"}>Download CV</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
// export default SectionWrapper(About, "about");