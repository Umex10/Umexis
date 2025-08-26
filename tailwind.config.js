/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/*.html", "./src/js/*.js"],
   safelist: [
    "dot-style",
    "animate-slideIn",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bitcount: ["Bitcount Grid Double", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        lightbg: "#FDFDFD", // Light Mode Hintergrund
        darkbg: "#1E293B", // Dark Mode Hintergrund
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        "slideIn": {
          "0%": { opacity: 0, transform: "translateX(30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-span": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "slideIn": "slideIn 0.5s ease-out",
        "slide-span": "slide-span 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};