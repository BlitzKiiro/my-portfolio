/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: {
            1: "#121212",
            2: "#161515",
          },
          container: {
            1: "#1E1E1E",
            2: "#252525",
            3: "#2E2E2E",
            4: "#F1F3F5",
            5: "#F8F9FA",
          },
          text: {
            1: "#ECECEC",
            2: "#D9D9D9",
            3: "#ACACAC",
            4: "#595959",
          },
          border: {
            1: "#E0E0E0",
            2: "#A0A0A0",
            3: "#4D4D4D",
            4: "#2A2A2A",
          },
          primary: {
            1: "#96F2D7",
            2: "#63E6BE",
          },
        },
        light: {
          bg: {
            1: "#F8F9FA",
            2: "#FFFFFF",
          },
          container: {
            1: "#FFFFFF",
            2: "#F8F9FA",
            3: "#E9ECEF",
            4: "#DEE2E6",
            5: "#212529",
            6: "#343A40",
          },
          text: {
            1: "#212529",
            2: "#495057",
            3: "#868E96",
            4: "#CED4DA",
          },
          border: {
            1: "#343A40",
            2: "#ADB5BD",
            3: "#DEE2E6",
            4: "#F1F3F5",
          },
          primary: {
            1: "#12B886",
            2: "#20C997",
          },
        },
        alphabg: "#1a1c2085",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
