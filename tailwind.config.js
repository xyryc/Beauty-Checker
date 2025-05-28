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
      },
      borderColor: {
        primary: "#A1A1A1",
      },
      fontFamily: {
        poppins: ["Poppins-Regular"],
      },
    },
  },
  plugins: [],
};
