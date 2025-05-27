/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B21A8",
        accent: "#10B981",
        dark: "#111827",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
