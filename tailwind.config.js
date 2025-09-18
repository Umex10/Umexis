/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/*.html", "./src/js/**/*.js"],
   safelist: [
    "dot-style",
    "animate-slideIn",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bitcount: ["Bitcount Grid Double", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        title: ["Outfit", "sans-serif"]
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
        "gradientShift": {
          "0%": { 'background-position': '0% 50%' },
          "50%": { 'background-position': '100% 50%' },
          "100%": { 'background-position': '0% 50%' },
      },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "slideIn": "slideIn 0.5s ease-out",
        "slide-span": "slide-span 0.3s ease-in-out",
        "gradientShift": "gradientShift 10s ease infinite",
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-600': '600% 600%',
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};