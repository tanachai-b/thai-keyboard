import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: { default: ["__Inter_e66fe9", "__Noto_Sans_Thai_e8ac70"] },
    fontSize: {
      xs: ["12px", { lineHeight: "16px" }],
      sm: ["14px", { lineHeight: "20px" }],
      base: ["16px", { lineHeight: "24px" }],
      xl: ["20px", { lineHeight: "28px" }],
      "2xl": ["24px", { lineHeight: "32px" }],
      "3xl": ["30px", { lineHeight: "36px" }],
      "4xl": ["36px", { lineHeight: "40px" }],

      x10: ["10px", { lineHeight: "15px" }],
      x12: ["12px", { lineHeight: "17px" }],
      x13: ["13px", { lineHeight: "18px" }],
      x14: ["14px", { lineHeight: "19px" }],
      x15: ["15px", { lineHeight: "20px" }],
      x20: ["20px", { lineHeight: "30px" }],
      x30: ["30px", { lineHeight: "50px" }],
      x50: ["50px", { lineHeight: "70px" }],
      x70: ["70px", { lineHeight: "100px" }],
      x100: ["100px", { lineHeight: "150px" }],
    },
    spacing: {
      "0": "0px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "4": "16px",
      "5": "20px",
      "7": "28px",
      "10": "40px",
      "12": "48px",
      "16": "64px",

      x0: "0px",
      x1: "1px",
      x2: "2px",
      x3: "3px",
      x5: "5px",
      x7: "7px",
      x10: "10px",
      x15: "15px",
      x20: "20px",
      x30: "30px",
      x50: "50px",
      x70: "70px",
      x100: "100px",
      x150: "150px",
      x200: "200px",
      x300: "300px",
      x500: "500px",
      x700: "700px",
      x1000: "1000px",
      x1500: "1500px",
      x2000: "2000px",
    },
    colors: {
      transparent: "transparent",

      bg: "#101010",
      bg_hover: "#181818",
      border: "#303030",
      text_white: "#f0f0f0",
      text_grey: "#808080",
      text_red: "#ff0000",
      highlight_yellow: "#ffc000",

      black: "#000000",
      "black-light": "#202020",
      "grey-dark": "#404040",
      grey: "#808080",
      "grey-light": "#c0c0c0",
      "white-dark": "#e0e0e0",
      white: "#ffffff",

      "yellow-light": "#ffe080",
      "orange-light": "#ffb080",
      "red-light": "#ff80c0",
      "purple-light": "#c080ff",
      "blue-light": "#80c0ff",
      "green-bluish-light": "#80ffc0",
      "green-yellowish-light": "#c0ff80",
    },
    borderWidth: {
      DEFAULT: "1px",

      x0: "0px",
      x1: "1px",
      x2: "2px",
      x3: "3px",
      x5: "5px",
      x7: "7px",
      x10: "10px",
      x15: "15px",
      x20: "20px",
      x30: "30px",
      x50: "50px",
      x70: "70px",
      x100: "100px",
    },
    borderRadius: {
      none: "0",
      xl: "12px",

      full: "9999px",

      x0: "0px",
      x1: "1px",
      x2: "2px",
      x3: "3px",
      x5: "5px",
      x7: "7px",
      x10: "10px",
      x15: "15px",
      x20: "20px",
      x30: "30px",
      x50: "50px",
      x70: "70px",
      x100: "100px",
      x150: "150px",
      x200: "200px",
      x300: "300px",
      x500: "500px",
      x700: "700px",
      x1000: "1000px",
    },
    boxShadow: {
      none: "none",
      inner: "inset 0 0 5px 0 #00000080",
      x0: "none",
      x5: "0 2px 5px 0px #00000080",
      x7: "0 3px 7px 0px #00000080",
      x10: "0 5px 10px 0px #00000080",
      x15: "0 7px 15px 0px #00000080",
      x20: "0 10px 20px 0px #00000080",
      x30: "0 15px 30px 0px #00000080",
      x50: "0 20px 50px 0px #00000080",
      x70: "0 30px 70px 0px #00000080",
    },
    blur: {
      x0: "0px",
      "x0.5": "0.5px",
      x1: "1px",
      x2: "2px",
      x3: "3px",
      x5: "5px",
      x7: "7px",
      x10: "10px",
      x15: "15px",
      x20: "20px",
      x30: "30px",
      x50: "50px",
      x70: "70px",
      x100: "100px",
      x150: "150px",
      x200: "200px",
      x300: "300px",
      x500: "500px",
      x700: "700px",
      x1000: "1000px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
