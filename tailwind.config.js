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
        // Custom colors (renamed to avoid conflicts with defaults)
        "custom-purple": "#611F69",
        "custom-green": "#6B9F36",
        "custom-orange": "#F9CD92",
        "custom-red": "#FF605C",

        lightgrey: "#8C8C8C",
        lightpink: "#FCF6EF",
        grey500: "#ECECEC",
        bgpink: "#FCF5EF",
        bgpurple: "#451F49",
        emailbg: "#6a4c6d",
        offwhite: "#FDFDFD",
        offblack: "#333333",
        // Enhanced brand colors
        blue: {
          primary: "#0d47a1",
          secondary: "#1976d2",
          light: "#42a5f5",
        },
        brand: {
          purple: "#5C6EF8",
          violet: "#8A5CF6",
          red: "#EF4444",
          redDark: "#DC2626",
        },
      },

      backgroundImage: {
        "page-light":
          "linear-gradient(to bottom right, #fafbff, #f4f3ff, #eef2ff)",

        "card-purple":
          "linear-gradient(to bottom right, #5C6EF8, #8A5CF6)",

        "white-blur":
          "linear-gradient(to bottom right, rgba(255,255,255,0.65), rgba(255,255,255,0.35))",

        // Additional brand gradients
        "brand-purple":
          "linear-gradient(to right, #5C6EF8, #8A5CF6)",

        "brand-blue":
          "linear-gradient(to right, #0d47a1, #1976d2)",

        "brand-red":
          "linear-gradient(to right, #EF4444, #DC2626)",
      },

      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
