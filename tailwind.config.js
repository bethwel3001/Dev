/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  // BYE BYE VANILLA CSS
  // tailwind my new CATCH!
  theme: {
    extend: {
      // keyframes animations
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        // fadeOut: "fadeOut 1s ease-in-out",
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out'
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
      // fonts for partners section
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      colors: {
        primary: "#0077ff",
        "primary-dark": "#0056b3",
        secondary: "#ff9900",
      },
    },
  },
  plugins: [],
}
