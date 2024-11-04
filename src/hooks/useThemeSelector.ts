import { useEffect } from "react";

export const useThemeSelector = () => {
  useEffect(() => {
    // If the user has selected a theme, use that
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    }
    // Else if the users OS preferences prefers dark mode
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    // Else use light mode
    else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, []);
};
