/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        limeGreen: "#B9FF66",
        deepNavy: "#0D0C22",
        skyBlue: "#2D8CFF",
        slateGray: "#33475B",
        crimsonRed: "#D81F26",
        coralOrange: "#FF7A59",
        amber: "#FF9900",
      },
    },
  },
  plugins: [],
};
