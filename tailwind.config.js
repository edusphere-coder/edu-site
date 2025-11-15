// /** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');

// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         purple: '#611F69',
//         lightgrey: '#8C8C8C',
//         green: '#6B9F36',
//         lightpink: '#FCF6EF',
//         orange: '#F9CD92',
//         grey500: '#ECECEC',
//         bgpink: "#FCF5EF",
//         bgpurple: '#451F49',
//         emailbg: '#6a4c6d',
//         offwhite: '#FDFDFD',
//         offblack: '#333333',
//         red: '#FF605C',
//       },
//       fontFamily: {
//         inter: ['Inter', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#611F69",
        lightgrey: "#8C8C8C",
        green: "#6B9F36",
        lightpink: "#FCF6EF",
        orange: "#F9CD92",
        grey500: "#ECECEC",
        bgpink: "#FCF5EF",
        bgpurple: "#451F49",
        emailbg: "#6a4c6d",
        offwhite: "#FDFDFD",
        offblack: "#333333",
        red: "#FF605C",
      },

      backgroundImage: {
        "page-light":
          "linear-gradient(to bottom right, #fafbff, #f4f3ff, #eef2ff)",

        "card-purple":
          "linear-gradient(to bottom right, #5C6EF8, #8A5CF6)",

        "white-blur":
          "linear-gradient(to bottom right, rgba(255,255,255,0.65), rgba(255,255,255,0.35))",
      },

      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
