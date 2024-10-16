const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
        },
        secondary: {
          100: "var(--secondary-100)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
        }
      },
      fontFamily: {
        sans: ["Greycliff CF", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

