"use client";

import { motion } from "framer-motion";
import { Shield, Users } from "lucide-react";
import Image from "next/image";

// Animación de entrada suave
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const partners = [
  { name: "Dahua", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-ywnxx1rzencwuvbwdf9v.webp" },
  { name: "Google Cloud", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-zbcarzljawyvqokn0mzw.webp" },
  { name: "LoRaWAN", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-gy46yejnhgqahj6emufz.webp" },
  { name: "Tektelic", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-vsyuoep2qksivbiffamj.webp" },
  { name: "Yubox", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-crsnnn1lwnv0r1vq3e8c.webp" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050A14]">
      
      {/* 1. FONDO CON OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-jgngsu4js4ar7nglmc5w.webp"
          alt="Hero Background Map"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        {/* Degradados para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A14]/60 to-transparent" />
      </div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-5xl mx-auto space-y-8"
        >
          {/* Titular */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Sincronizamos Tecnología y <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Comunidad
            </span>{" "}
            para Salvar Vidas.
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            El primer ecosistema que une Detección, Inteligencia de Datos y Respuesta Operativa.
          </p>

          {/* Botones de Acción (CTA) */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            {/* Botón Personas */}
            <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105 flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
              <Users size={24} />
              <span>Para Personas y Familias</span>
            </button>

            {/* Botón Empresas */}
            <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
              <Shield size={24} />
              <span>Para Empresas y Gobierno</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* 3. BARRA DE PARTNERS (Trust Bar) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 w-full mt-24 md:mt-32 pb-10"
      >
        <p className="text-center text-xs font-semibold tracking-[0.3em] text-gray-500 mb-8 uppercase">
          Tecnología Potenciada Por
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-6">
          {partners.map((partner, index) => (
            // CAMBIO 1: El contenedor ahora es un poco más grande, tiene padding,
            // centra el contenido y tiene un fondo sutil al hacer hover.
            <div 
               key={index} 
               className="relative h-14 w-32 md:h-20 md:w-40 group cursor-pointer flex items-center justify-center p-3 rounded-2xl transition-all duration-500 hover:bg-white/7"
            >
              
              {/* NUEVO: El "Destello" trasero.
                  Es una capa absoluta con un degradado blanco y mucho desenfoque (blur),
                  invisible por defecto (opacity-0), visible al hacer hover en el grupo. */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/0 via-white/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl -z-10"></div>

              <Image
                src={partner.url}
                alt={partner.name}
                fill
                // CAMBIO 2: Quitamos el 'scale-110' porque ahora el contenedor hace el efecto pop.
                // Añadimos 'drop-shadow' blanco para ayudar a los logos oscuros.
                className="object-contain transition-all duration-300 
                           brightness-0 invert opacity-60 
                           group-hover:filter-none group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}