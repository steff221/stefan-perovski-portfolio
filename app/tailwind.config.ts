import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          bg:      "#060d1f",
          surface: "#0d1b35",
          card:    "#112040",
          border:  "#1e3a6e",
          accent:  "#3b82f6",
          light:   "#60a5fa",
          text:    "#e2e8f0",
          muted:   "#7a9cc8",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans:  ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;