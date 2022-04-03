module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Popp ins', sans-serif",
      },
      colors: {
        primary: "#1ECB5C",
      },
    },
    backgroundImage: {
      city: "url('/images/background-city.png')",
      "back-icon": "url('/icons/back-icon.svg')",
    },
  },
  plugins: [],
};
