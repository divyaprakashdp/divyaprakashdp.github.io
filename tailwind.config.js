/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Merienda"],
        heading: ["Exo"],
      },
      backgroundImage: {
        hero: "url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg')",
      },
    },
  },
  plugins: [],
};
