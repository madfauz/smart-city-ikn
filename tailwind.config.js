export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        raleway: ["Raleway"],
      },
      fontSize: {
        "vm-title": "24px",
        "sm-title": "26px",
        "md-title": "28px",
        "lg-title": "30px",
        "xl-title": "32px",

        "vm-desc": "16px",
        "sm-desc": "18px",
        "md-desc": "20px",
        "lg-desc": "22px",
        "xl-desc": "24px",

        "vm-card-title": "18px",
        "sm-card-title": "20px",
        "md-card-title": "22px",
        "lg-card-title": "24px",
        "xl-card-title": "26px",

        "vm-card-desc": "12px",
        "sm-card-desc": "14px",
        "md-card-desc": "16px",
        "lg-card-desc": "18px",
        "xl-card-desc": "20px",

        "vm-card-tag": "14px",
        "sm-card-tag": "16px",
        "md-card-tag": "18px",
        "lg-card-tag": "20px",
        "xl-card-tag": "22px",

        "vm-card-date": "12px",
        "sm-card-date": "14px",
        "md-card-date": "16px",
        "lg-card-date": "18px",
        "xl-card-date": "20px",
      },
      spacing: {
        vm: "16px",
        sm: "16px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },
      colors: {
        primary: "#D3A976",
        secondary: "#FCF7F0",
        dark: "#080809",
        gray: "#666666",
        semidark: "#2B2B2B",
        semilight: "#E1E1E1",
      },
      fontColor: {
        "title-color": "#080809",
        "desc-color": "#2B2B2B",
        "card-desc-color": "#2B2B2B",
        "card-date-color": "#666666",
      },
      boxShadow: {
        "custom-dark": "0 2px 54px rgba(170, 170, 170, 0.28)",
      },
      gradientColorStops: {
        "start-primary": "#EEB25C",
        "end-primary": "#F9CA86",
        primary: "#D3A976",
        secondary: "#FCF7F0",
        dark: "#080809",
        gray: "#666666",
        semidark: "#2B2B2B",
      },
    },
  },
  plugins: [],
};
