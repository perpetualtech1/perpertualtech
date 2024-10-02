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
      boxShadow: {
        "gradient-glow": `
        0 8px 12px rgba(0, 119, 255, 0.2),  /* Larger blue shadow */
        0 4px 6px rgba(98, 0, 238, 0.2),   /* Existing color with adjusted opacity and size */
        0 2px 4px rgba(98, 0, 238, 0.1),   /* Additional shadow for more color depth */
        0 1px 3px rgba(255, 255, 0, 0.2);  /* Added yellow accent for more vibrancy */
        `,
      },
      // fontSize: {
      //   "5xl": {
      //     fontSize: "3rem",
      //     lineHeight: "4rem",
      //   },
      // },
      colors: {
        "gradient-from": "#6B73FF",
        "gradient-to": "#000DFF",
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
