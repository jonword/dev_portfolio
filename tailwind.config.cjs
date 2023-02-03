/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /*screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },*/
    colors: {
      sidenav: "rgb(25, 37, 45)",
      navhover: "rgb(112, 128, 144)",
      main: "rgba(10, 11, 16, 0.897)",
      shadow: "rgba(117, 129, 147, 0.569)",
      white: "#FFF",
      subtitle: "rgb(99, 197, 189)",
      linkedin: "rgb(0, 119, 181)",
      email: "rgb(78, 156, 117)",
      projects: "rgb(19, 22, 26)",
      ts: "#3178C6",
      react: "#61DBFB",
      js: "#F7Df1E",
      tailwind: "#00B4B6",
    },
    fontFamily: {
      sans: ["Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
