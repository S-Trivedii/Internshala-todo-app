/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      xxs: "320px",
      xs: "480px",
    },
  },
  plugins: [],
};
