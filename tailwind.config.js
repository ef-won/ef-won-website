/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(circle at top, #0b0f19, #05070f)',
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'sans-serif'],
      },
      colors: {
        'primary': '#00ffd5',
        'secondary': '#00aaff',
      },
    },
  },
  plugins: [],
}