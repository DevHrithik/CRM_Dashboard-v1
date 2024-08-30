/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      ghostwhite: {
        100: "#fafbff",
        200: "#f9fbff",
      },
      white: "#fff",
      whitesmoke: {
        100: "#f5f5f5",
        200: "#f0f0f0",
        300: "#eee",
      },
      darkslategray: {
        100: "#404b52",
        200: "#3d3c42",
        300: "#333",
        400: "#292d32",
      },
      black: "#000",
      blueviolet: "#5932ea",
      silver: "#b5b7c0",
      red: {
        100: "#ff2b2b",
        200: "#df0404",
      },
      pink: "#ffc5c5",
      lightpink: "#e6abab",
      mediumseagreen: "#00b087",
      mediumaquamarine: {
        100: "#1ac9a1",
        200: "#16c098",
        300: "rgba(22, 192, 152, 0.38)",
      },
      seagreen: {
        100: "#008767",
        200: "rgba(0, 166, 128, 0.38)",
      },
      gainsboro: {
        100: "#e6e6e6",
        200: "#e0e0e6",
      },
      gray: {
        100: "#838383",
        200: "#7e7e7e",
        300: "#757575",
      },
      darkgray: "#acacac",
      crimson: "#d0004b",
      forestgreen: "#00ac4f",
      mediumblue: "#4925e9",
      lightslategray: "#9197b3",
    },
    spacing: {},
    fontFamily: {
      poppins: "Poppins",
    },
    borderRadius: {
      "20xl-9": "39.9px",
      "7xs-3": "5.3px",
      "sm-3": "13.3px",
      base: "16px",
      "7xl-6": "26.6px",
      "2xs-6": "10.6px",
    },
  },
  fontSize: {
    base: "16px",
    "lg-6": "18.6px",
    "10xl-3": "29.3px",
    "4xl": "23px",
    "23xl-6": "42.6px",
    "7xl": "26px",
    "15xl": "34px",
    "sm-3": "13.3px",
    "15xl-6": "34.6px",
    "2xl": "21px",
    "9xl": "28px",
    inherit: "inherit",
  },
  screens: {
    lg: {
      max: "1200px",
    },
  },
};
export const plugins = [];
