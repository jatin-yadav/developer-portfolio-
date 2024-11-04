export const ChangeTheme = (setTheme: (value: string) => void) => {
  const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme === "dark") {
    localStorage.setItem("theme", "light");
    setTheme("light");
  } else {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  }
};
