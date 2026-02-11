"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-40 overflow-hidden bg-brand-navy">
      
      {/* 1. EL PULSO DEL NÚCLEO (Background FX) - Escalamiento responsivo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-brand-sky/20 rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] border border-brand-teal/10 rounded-full" 
        />
        <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-brand-sky/10 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative group"
        >
          {/* 2. TARJETA PORTAL - Ajuste de padding y bordes para móvil */}
          <div className="relative overflow-hidden bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[3rem] px-6 py-16 sm:p-16 md:p-24 text-center">
            
            {/* Badge de Seguridad */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy border border-brand-teal/30 text-brand-sky text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap">
              <ShieldCheck size={14} className="animate-pulse" /> Estatus: Sistema Listo
            </div>

            {/* CONTENIDO TEXTUAL - Tipografía líquida */}
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-tight">
              ¿Listo para recuperar el <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-white to-brand-teal">
                Control Total?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-brand-slate mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              La seguridad reactiva es el pasado. 
              <span className="text-white font-medium"> Sentinel OS</span> es la infraestructura que te devuelve la ventaja estratégica. 
              Agenda tu activación hoy.
            </p>

            {/* 3. BOTONES - Cambio de dirección en móvil */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
              
              <Link href="/demo" className="group relative w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-sky rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-brand-navy font-black rounded-xl md:rounded-2xl text-base md:text-lg transition-all transform group-hover:scale-[1.05] active:scale-95">
                  <CalendarCheck size={20} className="md:size-[22px] text-brand-teal" />
                  AGENDAR DEMOSTRACIÓN
                </div>
              </Link>

              <Link href="/nosotros" className="group flex items-center gap-2 text-brand-slate hover:text-white transition-colors font-medium text-sm md:text-base">
                Conocer el Manifiesto ANKA 
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-DEFAULT/40 to-transparent" />
          </div>

          {/* Decoración UI - Solo en pantallas grandes */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute -top-10 -right-10 p-6 bg-brand-navy border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col gap-3">
               <div className="w-12 h-1 bg-brand-teal rounded-full" />
               <div className="w-24 h-1 bg-brand-slate/30 rounded-full" />
               <div className="w-16 h-1 bg-brand-slate/30 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}