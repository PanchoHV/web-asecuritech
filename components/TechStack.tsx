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

export default function TechStack() {
  return (
    // 1. CAMBIO: Fondo 'brand-navy' para continuidad perfecta y borde sutil 'brand-slate'
    <section className="py-12 bg-brand-navy border-t border-brand-slate/10">
      <div className="container mx-auto px-6">
        {/* 2. CAMBIO: Texto en 'brand-slate' para mantener la paleta de grises azulados */}
        <p className="text-center text-[10px] font-semibold tracking-[0.4em] text-brand-slate mb-10 uppercase">
          Infraestructura Potenciada por Líderes Globales
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group relative h-10 w-32 md:h-12 md:w-34 transition-all duration-500"
            >
              {/* 3. CAMBIO: El Glow ahora usa 'brand-sky' (Tu color de Luz #6bccf6) */}
              <div className="absolute -inset-4 bg-brand-sky/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Image
                src={partner.url}
                alt={partner.name}
                fill
                className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(107,204,246,0.5)] transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}