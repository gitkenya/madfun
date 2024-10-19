import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        barlow: ["var(--font-barlow)"],
      },

      colors: {
        primary: {
          50: "#FFFAE5",
          100: "#FFF6CC",
          200: "#FFEC99",
          300: "#FFE366",
          400: "#FFDA33",
          500: "#FFD100",
          600: "#CCA700",
          700: "#997D00",
          800: "#665300",
          900: "#332A00",
          950: "#191500",
        },

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui, require("tailwindcss-animate")],
};
export default config;
