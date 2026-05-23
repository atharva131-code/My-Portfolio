/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind to scan these files for class names
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Custom colors so we can write bg-primary, text-accent etc.
        primary:  "#0d0d0d",   // darkest bg
        secondary:"#141414",   // navbar bg
        card:     "#1a1a1a",   // card bg
        accent:   "#00c896",   // green highlight
      },
      fontFamily: {
        sans: ["DM Sans", "Segoe UI", "sans-serif"],
      },
      // Custom fade-up animation used on every page
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
