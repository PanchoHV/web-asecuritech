/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        asecuritech: {
          dark: "#050A14",      // Fondo principal
          cyan: "#22D3EE",      // Tecnología
          blue: "#2563EB",      // Corporativo
          amber: "#F59E0B",     // Comunidad
        },
      },
    },
  },
  plugins: [],
}