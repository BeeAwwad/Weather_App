/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-mode": "#132D46", // Dark Mode Color home
        "dark-home": "#191E29", // Dark Mode Color components
        "dark-second": "#01C38D", // Dark Mode Color secondary
        "dark-third": "#696E79", // Dark Mode Color secondary
      },
      backgroundColor: {
        "dark-mode": "#132D46", // Dark Mode Color home
        "dark-home": "#191E29", // Dark Mode Color components
        "dark-second": "#01C38D", // Dark Mode Color secondary
        "dark-third": "#696E79", // Dark Mode Color secondary
      },
      textColor: {
        "dark-mode": "#132D46", // Dark Mode Color home
        "dark-home": "#191E29", // Dark Mode Color components
        "dark-second": "#01C38D", // Dark Mode Color secondary
        "dark-third": "#696E79", // Dark Mode Color secondary
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      borderColor: {
        "dark-mode": "#132D46", // Dark Mode Color home
        "dark-home": "#191E29", // Dark Mode Color components
        "dark-second": "#01C38D", // Dark Mode Color secondary
        "dark-third": "#696E79", // Dark Mode Color secondary
      },
      fontSize: {
        large: "12rem",
        extra: "16rem",
        crazy: "20rem",
      },
    },
  },
  plugins: [],
};
