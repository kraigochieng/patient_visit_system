/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Helvetica'],
    },
    extend: {colors: {
      darkestBlue: "rgb(3, 4, 94)",
      darkBlue: "rgb(0, 119, 182)",
      middleBlue: "rgb(0, 180, 216)",
      lightBlue: "rgb(144, 224, 239)",
      lightestBlue: "rgb(202, 240, 248)",
      linkBlue: "#0000FF",
      linkPurple: "#800080"
    }},
  },
  plugins: [],
}

