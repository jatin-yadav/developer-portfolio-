import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo, MenuIcon, CloseIcon, moonIcon, sunIcon, twitterIcon, linkedInIcon, githubIcon, leetCodeIcon, emailIcon, resumeLink } from "../assets";
import { styles } from "../styles";
import { useRecoilState } from "recoil";
import { themesAtom } from "../store/atoms/themesAtom";
import { ChangeTheme } from "../utils/changeThemeFn";
const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useRecoilState(themesAtom);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();



  useEffect(() => {
    const section = location.hash.replace('#', '');
    setActive(section)
  }, [active, location.hash])




  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className={`${isScrolled ? "bg-background-2 shadow-2xl" : "backdrop-blur-xl absolute"
          } transition-all duration-300 fixed w-full z-50`}>
          <nav className={`${styles.paddingX} w-full flex items-center py-4`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
              <Link
                to="/"
                className="flex items-center justify-center gap-2"
                onClick={() => {
                  setActive("");
                  setToggle(false);
                  window.scroll(0, 0);
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  // width="36px"
                  className="w-9 h-9 object-contain"
                />
                <span className="text-4xl text-content tracking-wider font-bold cursor-pointer">
                  JY
                </span>
              </Link>
              <ul className="list-none hidden sm:flex flex-row items-center gap-10">
                {navLinks.map((Link) => (
                  <li
                    key={Link.id}
                    className={`${active === Link.id ? "text-content" : "text-accent-1"
                      }  hover:text-content text-sm font-medium cursor-pointer`}
                    onClick={() => setActive(Link.id)}
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                ))}
                <li
                  className={`${active === 'resume' ? "text-content" : "text-accent-1"
                    }  hover:text-content text-sm font-medium cursor-pointer`}
                  onClick={() => setActive('resume')}
                >
                  <a href={resumeLink} target="_blank">Resume</a>
                </li>
                <li className={`cursor-pointer`}>
                  <img
                    src={theme === "light" ? moonIcon : sunIcon}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => { ChangeTheme(setTheme) }}
                  />
                </li>
              </ul>
              <div className="sm:hidden flex flex-1 justify-end items-center text-content">
                <button onClick={() => setToggle(!toggle)}>
                  {toggle ? <CloseIcon /> : <MenuIcon />}
                </button>
              </div>
            </div>
          </nav>

          {/* ---------------------------------------------------------------------------------------------- */}
          <div
            className={`${!toggle ? "hidden" : "block"
              } h-screen bg-background-2 absolute top-0 right-0 mt-0 w-10/12 py-7`}
          >
            <ul className="list-none flex justify-between mx-4">
              <li className="w-6 h-6 flex justify-center items-center">
                <button onClick={() => setToggle(!toggle)} className="text-content">
                  {toggle ? <CloseIcon /> : <MenuIcon />}
                </button>
              </li>
              <li className={`cursor-pointer`}>
                <img
                  src={theme === "light" ? moonIcon : sunIcon}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain cursor-pointer"
                  onClick={() => ChangeTheme(setTheme)}
                />
              </li>
            </ul>

            <div className="py-12">
              <Link
                to="/"
                className="flex items-center justify-center gap-2"
                onClick={() => {
                  setActive("");
                  setToggle(false);
                  window.scroll(0, 0);
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  // width="36px"
                  className="w-20 h-20 object-contain"
                />
                <span className="text-7xl tracking-wider text-content font-bold cursor-pointer">
                  JY
                </span>
              </Link>
            </div>
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                >
                  <a
                    className={`${active === Link.id ? "text-content" : "text-accent-1"
                      }  font-poppins font-medium cursor-pointer text-[18px] border-b border-b-secondary w-full flex justify-center items-center py-1`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.id);
                    }}
                    href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
              <li>
                <a
                  className={`${active === 'resume' ? "text-content" : "text-accent-1"
                    }  font-poppins font-medium cursor-pointer text-[18px] border-b border-b-secondary w-full flex justify-center items-center py-1`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive('resume');
                  }}
                  href={resumeLink} target="_blank" >Resume</a>
              </li>
            </ul>
            <div className="absolute bottom-[20px] flex flex-col gap-4 justify-center items-center w-full text-content">
              <p>Flow me on social media:</p>
              <div className="flex justify-center items-center gap-4 w-full">
                <a
                  href="https://x.com/scriptwithjatin"
                  target="_blank"
                  className={`rounded-full  h-10 w-10 flex justify-center items-center ${theme === "light" ? "bg-secondary" : "bg-primary"}`}
                >
                  <img src={twitterIcon} alt="icon" height={20} width={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/scriptwithjatin"
                  target="_blank"
                  className={`rounded-full  h-10 w-10 flex justify-center items-center ${theme === "light" ? "bg-secondary" : "bg-primary"}`}
                >
                  <img src={linkedInIcon} alt="icon" height={20} width={20} />
                </a>
                <a
                  href="https://github.com/jatin-yadav"
                  target="_blank"
                  className={`rounded-full  h-10 w-10 flex justify-center items-center ${theme === "light" ? "bg-secondary" : "bg-primary"}`}
                >
                  <img src={githubIcon} alt="icon" height={20} width={20} />
                </a>
                <a
                  href="https://leetcode.com/u/jatin-yadav/"
                  target="_blank"
                  className={`rounded-full  h-10 w-10 flex justify-center items-center ${theme === "light" ? "bg-secondary" : "bg-primary"}`}
                >
                  <img src={leetCodeIcon} alt="icon" height={20} width={20} />
                </a>
                <a
                  href="#contact"
                  className={`rounded-full  h-10 w-10 flex justify-center items-center ${theme === "light" ? "bg-secondary" : "bg-primary"}`}
                >
                  <img src={emailIcon} alt="icon" height={20} width={20} />
                </a>
              </div>
              <p>
                Copyright @ 2024 <a href="#">Jatin Yadav</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
