import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        "gray-400": "#9ca3af",
        "teal-400": "#2dd4bf",
        "cyan-400": "#22d3ee",
        "white/5": "rgba(255, 255, 255, 0.05)",
        "white/10": "rgba(255, 255, 255, 0.10)",
        "white/30": "rgba(255, 255, 255, 0.30)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
