import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E933C",
        secondary: "#204E4A",
        teritiary: "#297045",
        quantenary: "81C14B",
        rose: "#ECBA82",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      backgroundImage: {
        "button-gradient": "linear-gradient(140deg, #204E4A, #2E933C)",
        "background-gradient": "linear-gradient(140deg, #204E4A, #2E933C)",
      },
    },
  },
  plugins: [],
};
export default config;
