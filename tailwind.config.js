/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./src/*.html", "./src/js/**/*.js"];
export const safelist = ["dot-style", "animate-slideIn"];
export const theme = {
  extend: {
    fontFamily: {
      Bitcount: ["Bitcount Grid Double", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      title: ["Outfit", "sans-serif"],
    },
    colors: {
      lightbg: "#FDFDFD", // Light Mode Hintergrund
      darkbg: "#2e1065", // Dark Mode Hintergrund (deep violet to match the new theme)
    },
    keyframes: {
      "open-menu": {
        "0%": { transform: "scaleY(0)" },
        "80%": { transform: "scaleY(1.2)" },
        "100%": { transform: "scaleY(1)" },
      },
      slideIn: {
        "0%": { opacity: 0, transform: "translateX(30px)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
      },
      "slide-span": {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.4)" },
        "100%": { transform: "scale(1)" },
      },
      gradientShift: {
        "0%": { "background-position": "0% 50%" },
        "50%": { "background-position": "100% 50%" },
        "100%": { "background-position": "0% 50%" },
      },
      scrollY: {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(calc(-50% - 0.5rem))" },
      },
      scrollX: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(calc(-50% - 0.5rem))" },
      },
    },
    animation: {
      "open-menu": "open-menu 0.5s ease-in-out forwards",
      slideIn: "slideIn 0.5s ease-out",
      "slide-span": "slide-span 0.3s ease-in-out",
      gradientShift: "gradientShift 10s ease infinite",
      scrollY: "scrollY 20s linear infinite",
      scrollX: "scrollX 20s linear infinite",
    },
    backgroundSize: {
      "size-200": "200% 200%",
      "size-600": "600% 600%",
    },
    screens: {
      "3xl": "1920px", // Full HD
      "4xl": "2560px", // Ultra-Wide
      "5xl": "3840px", // 4K
    },
  },
};
export const plugins = ["prettier-plugin-tailwindcss"];
