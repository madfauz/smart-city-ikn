/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      spacing: {
        vm: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },
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
