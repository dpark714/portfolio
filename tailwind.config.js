/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        primary: "#141414",
        secondary: "#2c2c2c",
        accent: "#ff5e3a",
        light: "#f5f5f5",
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 20s linear infinite',
      },
    },
  },
  plugins: [],
}
