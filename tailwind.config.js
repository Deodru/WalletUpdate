/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        gray: "#858585",
        green: "#00a807",
      },
    },
  },
  plugins: [],
};
