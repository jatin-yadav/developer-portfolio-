import { project1, project2, project3 } from "@/assets"
import ProjectDisplay from "@/components/ProjectDisplay"
// import ProjectShowcase from "@/components/ProjectShowcase"
import { styles } from "@/styles"

const Projects = () => {
    return (
        <section id="projects" className="pt-12 bg-background-1">
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center text-content`}>
                <h1 className="text-4xl tracking-wide font-bold">Latest Projects</h1>
                <ProjectDisplay revers={false} projectImg={project1} />
                <ProjectDisplay revers={true} projectImg={project2} />
                <ProjectDisplay revers={false} projectImg={project3} />
                {/* <ProjectShowcase revers={false} projectImg={project1} />
                <ProjectShowcase revers={true} projectImg={project2} />
                <ProjectShowcase revers={false} projectImg={project3} /> */}
            </div>
        </section>
    )
}

export default Projects