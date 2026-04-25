import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f3ec",
        charcoal: "#1f1b18",
        espresso: "#322a25",
        brass: "#8e7753"
      },
      fontFamily: {
        serif: ["Iowan Old Style", "Baskerville", "Times New Roman", "serif"],
        sans: ["Inter", "Avenir Next", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 40px rgba(25, 20, 16, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
