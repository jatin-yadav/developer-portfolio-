import { twitterIcon, linkedInIcon, githubIcon, leetCodeIcon, emailIcon } from "../assets";
import { useRecoilValue } from "recoil";
import { themesAtom } from "../store/atoms/themesAtom";
import RunningText from "../components/RunningText";
import { Button } from "@/components/ui/button";
// import resume from "@/assets/docs/CV Jatin.pdf"



const Home = () => {
  const theme = useRecoilValue(themesAtom);

  return (
    <div className={`relative h-screen`}>
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center" />
      <div className="absolute inset-0 bg-background-1 opacity-80"></div>
      <header className="relative z-10 h-full">
        <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <section className="h-screen relative text-content">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center">
              <div className="py-5">
                <h3 className="text-2xl font-bold">Hello,</h3>
              </div>
              <RunningText />
              <div className="w-full flex items-center justify-center">
                <div className="mx-5 text-foreground font-semibold ">DEVELOPER</div>
                <div className="bg-primary h-2 w-2 origin-center rotate-45"></div>
                <div className="mx-5 text-foreground font-semibold">ENGINEER</div>
                <div className="bg-primary h-2 w-2 origin-center rotate-45"></div>
                <div className="mx-5 text-foreground font-semibold">VISIONARY</div>
              </div>
              <div className="pt-20">
                <a href='/src/assets/docs/Jatin-cv.pdf' download>
                  <Button>Download CV</Button>
                </a>
              </div>
            </div>
            <div className="absolute bottom-[50px] flex justify-center items-center gap-4 w-full">
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
          </section>
        </section>
      </header>
    </div>
  );
};

export default Home;
