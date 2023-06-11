/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "4xrow": "1fr 4fr",
      },
      animation: {
        "slide-left": "slideLeft 1.7s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        "slide-down": "slideDown 1.7s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        "fade-up": "fadeUp 1.7s",
        "slide": "slideToRight 1s forwards",
      },
      keyframes: {
        slideToRight: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          }
        },
        fadeUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(30px) scale(0.9)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px) scale(1)",
          }
        },
        slideLeft: {
          to: {
            transform: "translateX(0)",
          }
        },
        slideDown: {
          to: {
            transform: "translateY(0)",
          },
        },
      },
      boxShadow: {
        custom:
          "rgb(204, 219, 232) 3px 3px 6px 0px inset, 	rgba(1,195,141,1.0) -3px -3px 6px 1px inset",
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
        "dark-bright": "#c4aaf9",
        Clear: "#FDE047",
        Clouds: "#D3D3D3",
        Drizzle: "#87CEEB",
        Mist: "#C0C0C0",
        Rain: "#6BB6FF",
        Snow: "#FFFFFF",
        Haze: "#F0E68C",
        Dust: "#FFD700",
        Smoke: "#BDBDBD",
        Thunderstorm: "#7579E7",
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
