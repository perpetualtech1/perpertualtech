/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
      center: true,
      screens: {
        sm: "640px",
        md: "728px",
        lg: "1024px",
        xl: "1200px",
        // "2xl": "1440px", // Add custom 2xl breakpoint
      },
    },
    extend: {
      // fontSize: {
      //   "5xl": {
      //     fontSize: "3rem",
      //     lineHeight: "4rem",
      //   },  
      // },
      colors: {
        blueGray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569", // Added here
          800: "#1e293b",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          400: "#60a5fa",
          500: "#3b82f6",
        },
        gray: {
          100: "#f3f4f6",
        },
      },
    },
  },
  plugins: [],
};
