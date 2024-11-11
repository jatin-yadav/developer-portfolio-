import { twitterIcon, linkedInIcon, githubIcon, leetCodeIcon, emailIcon } from "../assets";
import { useRecoilValue } from "recoil";
import { themesAtom } from "../store/atoms/themesAtom";
import { styles } from "@/styles";

const Footer = () => {
    const theme = useRecoilValue(themesAtom);

    return (
        <section className="bg-background-1">
            <div className={`${styles.paddingX} py-4 flex flex-col items-center text-content`}>
                <div className='py-4'>
                    <p>You may also find me on these platforms!</p>
                    <div className="py-4 flex justify-center items-center gap-4 w-full">
                        <a href="https://x.com/scriptwithjatin" target="_blank" className={`border-2 ${theme === "dark" ? "bg-primary border-background-1" : "border-primary"} rounded-full  h-10 w-10 flex justify-center items-center`}>
                            <img src={twitterIcon} alt='icon' height={20} width={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/scriptwithjatin" target="_blank" className={`border-2 ${theme === "dark" ? "bg-primary border-background-1" : "border-primary"} rounded-full  h-10 w-10 flex justify-center items-center`}>
                            <img src={linkedInIcon} alt='icon' height={20} width={20} />
                        </a>
                        <a href="https://github.com/jatin-yadav" target="_blank" className={`border-2 ${theme === "dark" ? "bg-primary border-background-1" : "border-primary"} rounded-full  h-10 w-10 flex justify-center items-center`}>
                            <img src={githubIcon} alt='icon' height={20} width={20} />
                        </a>
                        <a href="https://leetcode.com/u/jatin-yadav/" target="_blank" className={`border-2 ${theme === "dark" ? "bg-primary border-background-1" : "border-primary"} rounded-full  h-10 w-10 flex justify-center items-center`}>
                            <img src={leetCodeIcon} alt='icon' height={20} width={20} />
                        </a>
                        <a href="#contact" className={`border-2 ${theme === "dark" ? "bg-primary border-background-1" : "border-primary"} rounded-full  h-10 w-10 flex justify-center items-center`}>
                            <img src={emailIcon} alt='icon' height={20} width={20} />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <p>&#169; 2024 | All right reserved | Designed and coded with ❤️ by Jatin Yadav</p>
                </div>
            </div>
        </section>
    )
}

export default Footer