/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",       // include MDX pages
    "./components/**/*.{js,jsx,mdx}",  // include components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B46C1",
        secondary: "#38A169"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
