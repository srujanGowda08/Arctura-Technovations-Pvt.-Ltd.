/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001f1f", // Dark greenish black
        secondary: "#003333", // Slightly lighter green-black
        accent: "#00ffbf", // Neon Green
        "accent-dark": "#00bfa6", // Darker neon green
        smoke_gradient: "linear-gradient(to right, #000000, #f5f5f5)",
      },
      backgroundImage: {
        "gradient-green-black":
          "radial-gradient(circle at 10% 30%, #00ffbf, #000000 80%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: "600",
          transition: "all 0.3s",
          textAlign: "center",
        },
        ".btn-primary": {
          backgroundColor: "#00ffbf",
          color: "#000",
          "&:hover": {
            backgroundColor: "#00bfa6",
            color: "#fff",
          },
        },
        ".btn-gradient": {
          backgroundImage:
            "radial-gradient(circle at 10% 30%, #00ffbf, #111100 90%)",
          color: "#fff",
          "&:hover": {
            filter: "brightness(110%)",
          },
        },
      });
    },
  ],
};
