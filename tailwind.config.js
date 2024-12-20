/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xl": "1.564rem",
      },
      colors: {
        primary: {
          DEFAULT: "#4793FF",
        },
        bgPrimary: {
          DEFAULT: "#4793FF33",
        },
        bgMain: {
          DEFAULT: "#0d1b2a",
        },
        fadedPrimary: {
          DEFAULT: "#939CB0",
        },
        greyAccent: {
          DEFAULT: "#939CB0",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
