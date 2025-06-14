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
      boxShadow: {
        ios: "0px 1px 2px rgba(0, 0, 0, 0.16)",
        android: "0px 1px 4px rgba(0, 0, 0, 0.40)",
        "ios-secondary": "0px 1px 4px rgba(0, 0, 0, 0.30)",
        "android-secondary": "0px 1px 4px rgba(0, 0, 0, 0.40)",
        "ios-tertiary": "0px 8px 8px 0px #00000033",
        "android-tertiary": "0px 8px 8px 0px #050505",
        "ios-quaternary": "0px 2px 2px 0px #00000026",
        "android-quaternary": "0px 2px 8px 0px #00000026",
      },
    },
  },
  plugins: [],
};
