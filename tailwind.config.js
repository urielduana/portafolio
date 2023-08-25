/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
    colors: {
      vadose: {
        100: "#00CBFA",
        200: "#F205CB",
        300: "#340E59",
        400: "#0F0E30",
        500: "#B54BAD",
      },
      surface: {
        100: "#F2F2F2",
        200: "#BFBFBF",
        300: "#737373",
        400: "#262626",
        500: "#0D0D0D",
      },
      tech: {
        10: "#F0DB4F",
        20: "#4DBA87",
        30: "#7A86B8",
        40: "#F9322C",
        50: "#E54C21",
        100: "#214CE5",
        200: "#7B11F8",
        300: "#38BDF8",
        400: "#3773A3",
        500: "#ED2C2D",
        600: "#03589C",
        700: "#31B9F6",
        800: "#F29221",
      },
    },
  },
  safelist: ["text-tech"],
  darkMode: "class",
  plugins: [nextui()],
};
