/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        screen: "white",
        primary: "#20B367",
        error: "#E44A4A",
      },
    },
  },
  plugins: [],
};
