/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-color": "#33353A",
      "secondary-color": "#2E2F34",
      "primary-text-color": "#D8A260"
    },
    extend: {
      transitionProperty: {
        width: "width"
      }
    },
  },
  plugins: [],
}

