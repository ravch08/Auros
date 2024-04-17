/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add the paths to all of your template files
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eb7025",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "mid-banner": "url('./src/assets/newsletter_bg.jpg')",
      },
    },
  },
  plugins: [],
};
