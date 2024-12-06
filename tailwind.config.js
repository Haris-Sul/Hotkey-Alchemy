/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28BBEB", // Light blue
        secondary: "#3B82F6", //  Blue
        secondary2: colors.blue["600"], // Blue dimmed
        bright: "#74fbef", // Cyan
        bright2: colors.teal["300"], // Cyan dimmed
        dark: "#2b2f35", // Dark grey
        warning: colors.red["500"], // Red
      },

      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  safelist: [
    'text-secondary',
    'border-secondary',
    'hover:bg-secondary',
    'text-bright2',
    'border-bright2',
    'hover:bg-bright2',
    'text-warning',
    'border-warning',
    'hover:bg-warning',
  ],
};
