/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Pacifico : ["Pacifico"],
        Roboto : ["Roboto"],
        Space : ["Space Grotesk"],
        Nunito : ["Nunito"],
      },
    },
  },
  plugins: [],
}

