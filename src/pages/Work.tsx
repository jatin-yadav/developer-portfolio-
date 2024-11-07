import { styles } from "@/styles"

const Work = () => {
    return (
        <section id="work" className="pt-12 bg-background-1">
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center text-content`}>
                <h1 className="text-4xl tracking-wide font-bold">My Experience</h1>
                <p className="py-4 text-center">Here is a quick summary of my most recent experiences:</p>
                <div className="mt-8 bg-background-2 w-full h-56 drop-shadow-[0_25px_25px_rgba(0,0,255,0.25)] p-4 rounded-lg">bifssfdbsjvd</div>
                <div className="p-6"></div>
                <div className="mt-8 bg-background-2 w-full h-56 drop-shadow-[0_25px_25px_rgba(0,0,255,0.25)] p-4 rounded-lg">bifssfdbsjvd</div>
            </div>
        </section>
    )
}

export default Work