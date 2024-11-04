/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
        },
        background: {
          1: "hsl(var(--color-background1) / <alpha-value>)",
          2: "hsl(var(--color-background2) / <alpha-value>)",
        },
        content: "hsl(var(--color-text) / <alpha-value>)",
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/backgrounds/bg_1.png')",
      },
    },
  },
  plugins: [],
};
