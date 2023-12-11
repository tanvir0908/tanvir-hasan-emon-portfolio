/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8F00FF",
        secondary: "#050816",
        gray: "#aaa6c3",
        "black-100": "#100d25",
        "black-200": "#090325",
      },
    },
  },
  plugins: [],
};
