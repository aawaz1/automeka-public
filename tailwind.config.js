/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   mq1650: {
      //     raw: "screen and (max-width: 1650px)",
      //   },
      //   mq1300: {
      //     raw: "screen and (max-width: 1300px)",
      //   },
      //   mq900: {
      //     raw: "screen and (max-width: 900px)",
      //   },
      //   mq450: {
      //     raw: "screen and (max-width: 450px)",
      //   },
      // },
      colors: {
        white: "#fff",
        darkslategray: "#3a4855",
        darkorange: "#f68e00",
        slategray: "#616e7a",
        dimgray: {
          "100": "#5a5a5a",
          "200": "rgba(87, 87, 88, 0.5)",
        },
        chocolate: "#c25c00",
        whitesmoke: "#f6f6f6",
        silver: {
          "100": "#c9c6c6",
          "200": "#bdb9b9",
        },
        black: "#000",
        // gray: {
        //   "100": "#8e8b8b",
        //   "200": "#1d2224",
        //   "300": "rgba(0, 0, 0, 0.78)",
        //   "400": "rgba(0, 0, 0, 0.89)",
        // },
        darkgray: "#ababab",
        gainsboro: "#e5e5e5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

