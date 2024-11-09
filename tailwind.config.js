/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#D3A976",
        secondary: "#FCF7F0",
        dark: "#080809",
      },
      boxShadow: {
        "custom-dark": "0 2px 54px rgba(170, 170, 170, 0.28)",
      },
      gradientColorStops: {
        "start-primary": "#EEB25C",
        "end-primary": "#F9CA86",
      },
    },
  },
  plugins: [],
};
