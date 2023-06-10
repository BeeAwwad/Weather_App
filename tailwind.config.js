/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, 	rgba(1,195,141,1.0) -3px -3px 6px 1px inset', 
      },
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
        "Clear": "#FDE047",
        "Clouds": "#D3D3D3",
        "Drizzle": "#87CEEB",
        "Mist": "#C0C0C0",
        "Rain": "#6BB6FF",
        "Snow": "#FFFFFF",
        "Haze": "#F0E68C",
        "Dust": "#FFD700",
        "Smoke": "#BDBDBD",
        "Thunderstorm": "#7579E7",
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
