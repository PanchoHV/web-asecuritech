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
    // AJUSTE: Reducimos pt-16 a pt-8 para mobile y pb a lo mínimo
    <section className="relative pt-8 md:pt-16 pb-2 bg-brand-navy border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* AJUSTE: Reducimos mb-10 a mb-4 para que el título 'abrace' a los logos */}
        <p className="text-center text-[9px] font-black tracking-[0.4em] text-brand-slate/50 mb-4 uppercase">
          Infraestructura Potenciada por Líderes Globales
        </p>

        {/* 1. VERSIÓN MOBILE: MÁXIMA DENSIDAD */}
        <div className="lg:hidden relative w-full overflow-hidden py-1">
          {/* Degradados laterales ligeramente más estrechos (w-12) */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-brand-navy to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-brand-navy to-transparent z-10" />

          <motion.div 
            // AJUSTE CRÍTICO: space-x-2 para una rotación sin huecos visuales
            className="flex space-x-2 w-fit items-center" 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 15, // Un poco más rápido para aumentar el dinamismo
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {doublePartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="relative h-14 w-44 flex-shrink-0" 
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

        {/* 2. VERSIÓN DESKTOP: (Se mantiene con el resplandor controlado) */}
        <div className="hidden lg:flex justify-center items-center gap-14 py-8">
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative h-20 w-52 z-10"
            >
              <div className="absolute -inset-6 bg-brand-sky/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <Image
                src={partner.url}
                alt={partner.name}
                fill
                className="object-contain brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(107,204,246,0.6)] transition-all duration-500 relative z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}