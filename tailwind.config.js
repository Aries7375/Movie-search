/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/Home.jsx",
    "./src/components/MoviesList.jsx",
    "./src/components/MovieData.jsx",
    "./src/components/Pagination.jsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "#222",
      },
      backgroundImage: {
        movieBg: "repeating-linear-gradient(45deg, black, transparent 100px)",
      },
      screens: {
        fd: { max: "370px" },
      },
    },
  },
  plugins: [],
};
