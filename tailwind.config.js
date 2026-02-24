module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#10B981", // emerald-500
          light: "#6ee7b7",
          dark: "#059669",
        },
      },
    },
  },
  plugins: [],
};
