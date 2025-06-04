/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        accent: "#767676",
        link: "#137cec",
        purplePrimary: "#6200EE",
        purpleAccent: "#AB67BC",
        customBlack: "#111111",
      },
      borderColor: {
        primary: "#A1A1A1",
      },
      fontFamily: {
        // poppins: ["Poppins-Regular", "sans-serif"],
        edu: ["EduQLDHand-Regular"],
      },
      boxShadow: {
        ios: "0px 1px 2px rgba(0, 0, 0, 0.16)",
        android: "0px 1px 4px rgba(0, 0, 0, 0.40)",
      },
    },
  },
  plugins: [],
};
