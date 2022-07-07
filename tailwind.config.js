/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        white: "#ffffff",
        blue: "#5847EB",
        "light-red-work": "#FF8C66",
        "soft-blue-play": "#56C2E6",
        "light-red-study": "#FF5C7C",
        "light-green-exercise": "#4ACF81",
        "violet-social": "#7536D3",
        "soft-orange-self-care": "#F1C65B",
      },
      neutral: {
        "very-dark-blue": "#0F1424",
        "dark-blue": "#1C1F4A",
        "desaturated-blue": "#6F76C8",
        "pale-blue": "#BDC1FF",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
