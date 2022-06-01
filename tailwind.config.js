const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['"inter"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      pallate1: "#54BAB9",
      white: "#fff",
      black: "#000",
      active: "#4D4A4A",
      gray: {
        0: "#fff",
        100: "#fafafa",
        200: "#eaeaea",
        300: "#999999",
        400: "#888888",
        500: "#666666",
        600: "#444444",
        700: "#333333",
        800: "#222222",
        900: "#111111",
      },
      main: {
        0: "#ffffff",
        100: "#fff2cc",
        200: "#ffe599",
        300: "#ffd867",
        400: "#ffcb34",
        500: "#ffbe01",
        600: "#ffa600",
        700: "#997201",
        800: "#664c00",
        900: "#332600",
      },
      red: "#F3162E",
      green: "#46EC67",
      yellow: "#FFBE01",
      hover: "#80cfcd",
      semiBlack: "#444",
      customtableheading1: "#F4F0EA",
      dishpalate1: "#FBF8F1",
      success: "#4BB543",
      error: "#FF5252",
      pagnumbers1: "#797575",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
