/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // TU IDENTIDAD CORPORATIVA EXACTA
        brand: {
          navy: "#13253e",    // Fondo Logo (Oscuro y Profesional)
          teal: "#37bac3",    // Manos (Tu color primario de acción)
          sky: "#6bccf6",     // Borde Luz (Tu color de acento brillante)
          slate: "#506c7e",   // Otro (Para textos secundarios/bordes)
          gray: "#e6e6e7",    // Borde Escudo (Para superficies claras)
        },
        // EL ÁMBAR (Mantenido por decisión estratégica)
        accent: {
          DEFAULT: "#f59e0b", // Ámbar estándar (Cálido)
          glow: "#fbbf24",    // Ámbar brillante (Alerta)
        }
      },
      backgroundImage: {
        // Un degradado especial usando tus colores para fondos ricos
        "brand-gradient": "linear-gradient(to right, #13253e, #0f1d32)", 
      },
    },
  },
  plugins: [],
};
export default config;