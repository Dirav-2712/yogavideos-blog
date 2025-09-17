/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./posts/**/*.{mdx}", // Include the posts directory
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
