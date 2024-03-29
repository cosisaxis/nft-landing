module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#23073A",
        subMain: " #dcab65",
        subLightMain: "#dcab65",
        edges: "#dcab65",
        whites: "#FFFFFF",
        blacks: "#000000",
        lightCream: "#f8efe1",
        lightGray: "#F6F7FC",
        pink: "#FD399B",
        cream: "#f8efe1",
        overlay: "#23073ACC",
      },
      fontFamily: {
        head: ["Russo One"],
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
}
