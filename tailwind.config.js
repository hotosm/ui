/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "0.125rem",
      },
      colors: {
        primary: "#d73f3f",
        secondary: "#2C3038"
      },
    },
  },
  plugins: [],
};
