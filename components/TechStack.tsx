"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Dahua", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-ywnxx1rzencwuvbwdf9v.webp" },
  { name: "Google Cloud", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-zbcarzljawyvqokn0mzw.webp" },
  { name: "LoRaWAN", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-gy46yejnhgqahj6emufz.webp" },
  { name: "Tektelic", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-vsyuoep2qksivbiffamj.webp" },
  { name: "Yubox", url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-crsnnn1lwnv0r1vq3e8c.webp" },
];

const doublePartners = [...partners, ...partners];

export default function TechStack() {
  return (
    <section className="py-12 bg-brand-navy border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        <p className="text-center text-[10px] font-black tracking-[0.4em] text-brand-slate/60 mb-14 uppercase">
          Infraestructura Potenciada por Líderes Globales
        </p>

        {/* 1. VERSIÓN MOBILE: CARRUSEL CON LOGOS MÁS GRANDES Y MENOR ESPACIO */}
        <div className="lg:hidden relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-navy to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-navy to-transparent z-10" />

          <motion.div 
            className="flex space-x-8 w-fit items-center" // Espacio reducido de 12 a 8
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 18, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {doublePartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="relative h-10 w-36 flex-shrink-0" // Tamaño aumentado de h-8/w-28 a h-10/w-36
              >
                <Image
                  src={partner.url}
                  alt={partner.name}
                  fill
                  className="object-contain brightness-0 invert opacity-70"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* 2. VERSIÓN DESKTOP: MÁXIMA PRESENCIA VISUAL */}
        <div className="hidden lg:flex justify-center items-center gap-12"> {/* Espacio reducido de 20 a 12 */}
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-16 w-44 transition-all duration-500" // Tamaño aumentado de h-12/w-36 a h-16/w-44
            >
              <div className="absolute -inset-6 bg-brand-sky/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <Image
                src={partner.url}
                alt={partner.name}
                fill
                className="object-contain brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(107,204,246,0.5)] transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}