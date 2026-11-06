/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          warm: "#FFFCF8",
          lavender: "#F4EEFA",
          card: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#C8AFE3",
          light: "#E1D2F1",
          dark: "#8B6BAF",
        },
        accent: {
          pink: "#E9BFD2",
          pinkLight: "#F8E9F1",
          blue: "#A9D9EE",
          blueLight: "#E5F4FA",
        },
        typography: {
          dark: "#493657",
          muted: "#756284",
          light: "#A492B2",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(73, 54, 87, 0.08)',
        'photo': '0 15px 35px -5px rgba(73, 54, 87, 0.12), 0 0 0 1px rgba(200, 175, 227, 0.2)',
        'modal': '0 25px 60px -15px rgba(73, 54, 87, 0.3)',
      }
    },
  },
  plugins: [],
}
