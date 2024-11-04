import { useEffect } from "react";
import { useThemeSelector } from "./hooks/useThemeSelector";
import { BrowserRouter } from 'react-router-dom'
import { useRecoilValue } from "recoil";
import { themesAtom } from "./store/atoms/themesAtom";

import Navbar from "./components/NavBar";
import Home from "./pages/Home"

function App() {
  // const [theme, setTheme] = useState('');
  const theme = useRecoilValue(themesAtom);
  // System Theme selector
  useThemeSelector();

  useEffect(() => {
    if (theme === "dark") {
      document.body.removeAttribute("class")
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    }
    if (theme === 'light') {
      document.body.removeAttribute("class")
      localStorage.setItem("theme", "light");
      document.body.classList.add("light");
    }
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <main>
          <Navbar />
          <Home />
        </main>
        <div className="h-screen bg-background-1 text-content">d</div>
      </BrowserRouter>
    </>
  )
}

export default App
