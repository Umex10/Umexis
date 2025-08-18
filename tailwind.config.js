/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/*.html", "./src/js/*.js"],
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
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
