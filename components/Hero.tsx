"use client";

import { motion } from "framer-motion";
import { Shield, Users, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy pt-20 md:pt-0">
      
      {/* 1. FONDO */}
      <div className="absolute inset-0 z-0">
        <div className="block md:hidden absolute inset-0">
          <Image
            src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-pohusqqtnvfwxpy2pngb.webp"
            alt="Ecosistema Mobile"
            fill
            priority
            className="object-cover opacity-70" 
          />
        </div>
        <div className="hidden md:block absolute inset-0">
          <Image
            src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-jgngsu4js4ar7nglmc5w.webp"
            alt="Ecosistema Desktop"
            fill
            priority
            className="object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-transparent to-brand-navy" />
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto md:mx-0 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.15] md:leading-[1.1] mb-6 tracking-tight">
            Sincronizamos <br className="hidden sm:block" />
            <span className="text-brand-sky">Tecnología</span> y <br />
            <span className="text-accent-DEFAULT">Comunidad</span> <br />
            <span className="text-white">Para Salvar Vidas</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 font-light px-2 md:px-0">
            El primer ecosistema que une Detección, Inteligencia de Datos y Respuesta Operativa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl">
            
            {/* --- TARJETA SENTINEL (ORGANIZACIONES) --- */}
            {/* Estado Inicial: Borde Transparente. Hover: Borde Turquesa y Fondo Turquesa suave */}
            <Link 
              href="/sentinel" 
              className="group p-6 md:p-8 rounded-2xl bg-brand-navy/40 backdrop-blur-sm border border-transparent hover:border-brand-teal hover:bg-brand-teal/10 transition-all duration-500 flex flex-col items-center md:items-start"
            >
              <Shield className="text-brand-teal mb-4 group-hover:scale-110 transition-transform w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Para Organizaciones</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2 md:line-clamp-none group-hover:text-gray-200 transition-colors">Sentinel OS: Control operativo y protección de activos.</p>
              <div className="flex items-center text-brand-teal font-bold text-sm">
                VER SENTINEL <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* --- TARJETA ZEPHIRA (FAMILIAS) --- */}
            {/* Estado Inicial: Borde Transparente. Hover: Borde Ámbar y Fondo Ámbar suave */}
            <Link 
              href="/zephira" 
              className="group p-6 md:p-8 rounded-2xl bg-brand-navy/40 backdrop-blur-sm border border-transparent hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-500 flex flex-col items-center md:items-start"
            >
              <Users className="text-amber-500 mb-4 group-hover:scale-110 transition-transform w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Para Familias</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2 md:line-clamp-none group-hover:text-gray-200 transition-colors">Zephira App: Seguridad ciudadana y respuesta inmediata.</p>
              <div className="flex items-center text-amber-500 font-bold text-sm">
                VER ZEPHIRA <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        animate={{ opacity: showScrollIndicator ? 1 : 0, y: showScrollIndicator ? [0, 10, 0] : 0 }}
        transition={{ opacity: { duration: 0.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" }}}
        className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center justify-center gap-2 cursor-pointer pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-slate">Descubre el Ecosistema</span>
        <ChevronDown className="text-brand-slate/50" size={24} />
      </motion.div>

    </section>
  );
}