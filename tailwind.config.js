/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DB202C",
        textHeading: "#FEF4F4",
        textParagraph: "#E3E0E0",
        secondary: "#FFC300",
        ascent: "#C8CFEC",
        background: {
          light: "#212529",
          semiDark: "#1F2127",
          dark: "#1A1C22",
        },
      },
      fontFamily: {
        volkhov: ["Volkhov", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
