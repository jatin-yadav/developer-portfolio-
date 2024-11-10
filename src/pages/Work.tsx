import { metaIcon, shopifyIcon, starbucksIcon, teslaIcon } from "@/assets";
import ExperinceDisplay from "@/components/ExperinceDisplay";
import { styles } from "@/styles"

const workExperince = [
    {
        companyName: "Shopify",
        companyLogo: shopifyIcon,
        companyColor: 'bg-green-500',
        position: "Software Executive",
        timePeriod: "May 2024 - Present",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officia laudantium at error, autem mollitia iusto perspiciatis laborum libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur corporis illo. Excepturi atque omnis sequi deleniti sint odit dolorem explicabo animi, voluptatem assumenda necessitatibus veniam impedit id, iusto eos ratione eum totam quasi aliquam. Earum cupiditate voluptates velit doloremque."
    },
    {
        companyName: "Tesla",
        companyLogo: teslaIcon,
        companyColor: 'bg-red-700',
        position: "Software Engineer",
        timePeriod: "Mar 2023 - May 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officia laudantium at error, autem mollitia iusto perspiciatis laborum libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur corporis illo. Excepturi atque omnis sequi deleniti sint odit dolorem explicabo animi, voluptatem assumenda necessitatibus veniam impedit id, iusto eos ratione eum totam quasi aliquam. Earum cupiditate voluptates velit doloremque."
    },
    {
        companyName: "Starbucks",
        companyLogo: starbucksIcon,
        companyColor: 'bg-green-800',
        position: "Prodec Manager",
        timePeriod: "Oct 2022 - Mar 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officia laudantium at error, autem mollitia iusto perspiciatis laborum libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur corporis illo. Excepturi atque omnis sequi deleniti sint odit dolorem explicabo animi, voluptatem assumenda necessitatibus veniam impedit id, iusto eos ratione eum totam quasi aliquam. Earum cupiditate voluptates velit doloremque."
    },
    {
        companyName: "Facebook",
        companyLogo: metaIcon,
        companyColor: 'bg-blue-600',
        position: "Software Engineer",
        timePeriod: "Jun 2020 - Oct 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officia laudantium at error, autem mollitia iusto perspiciatis laborum libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur corporis illo. Excepturi atque omnis sequi deleniti sint odit dolorem explicabo animi, voluptatem assumenda necessitatibus veniam impedit id, iusto eos ratione eum totam quasi aliquam. Earum cupiditate voluptates velit doloremque."
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
                                <p className="">{work.description}</p>
                            </ExperinceDisplay>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Work;