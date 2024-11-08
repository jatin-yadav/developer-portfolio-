import TestimonialShowcase from "@/components/TestimonialShowcase"
import { styles } from "@/styles"

const Testimonials = () => {
    return (
        <section id="work" className="pt-12 bg-background-1 h-screen">
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center text-content`}>
                <h1 className="text-4xl tracking-wide font-bold">Testimonials</h1>
                <p className="py-4 text-center font-semibold">Nice things people have said about me:</p>
            </div>
            <div className="flex justify-center items-center">
                <TestimonialShowcase />
            </div>
        </section>
    )
}

export default Testimonials