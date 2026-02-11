/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#13253e",
          teal: "#37bac3",
          sky: "#6bccf6",
          slate: "#506c7e",
          gray: "#e6e6e7",
        },
        accent: {
          DEFAULT: "#f59e0b",
          glow: "#fbbf24",
        }
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #13253e, #0f1d32)", 
      },
    },
  },
  plugins: [],
};
export default config;