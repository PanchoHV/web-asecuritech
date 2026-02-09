"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-brand-navy">
      
      {/* 1. EL PULSO DEL NÚCLEO (Background FX) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        {/* Círculos de Radar animacion infinita */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] border border-brand-sky/20 rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[600px] h-[600px] border border-brand-teal/10 rounded-full" 
        />
        {/* Glow Central */}
        <div className="absolute w-[300px] h-[300px] bg-brand-sky/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative group"
        >
          {/* 2. TARJETA PORTAL (Glassmorphism Pro) */}
          <div className="relative overflow-hidden bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 md:p-24 text-center">
            
            {/* Decoración de esquina: Badge de Seguridad */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy border border-brand-teal/30 text-brand-sky text-[10px] font-bold tracking-[0.3em] uppercase">
              <ShieldCheck size={14} className="animate-pulse" /> Estatus: Sistema Listo
            </div>

            {/* CONTENIDO TEXTUAL */}
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
              ¿Listo para recuperar el <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-white to-brand-teal">
                Control Total?
              </span>
            </h2>
            
            <p className="text-xl text-brand-slate mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              La seguridad reactiva es el pasado. 
              <span className="text-white font-medium"> Sentinel OS</span> es la infraestructura que te devuelve la ventaja estratégica. 
              Agenda tu activación hoy.
            </p>

            {/* 3. BOTONES CON INTERACCIÓN AVANZADA */}
            <div className="flex flex-col sm:row justify-center items-center gap-8">
              
              {/* Botón Primario: El "Detonador" */}
              <Link href="/demo" className="group relative">
                {/* Glow de fondo para el botón */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-sky rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative flex items-center gap-3 px-10 py-5 bg-white text-brand-navy font-black rounded-2xl text-lg transition-all transform group-hover:scale-[1.05] active:scale-95">
                  <CalendarCheck size={22} className="text-brand-teal" />
                  AGENDAR DEMOSTRACIÓN
                </div>
              </Link>

              {/* Link secundario sutil */}
              <Link href="/nosotros" className="group flex items-center gap-2 text-brand-slate hover:text-white transition-colors font-medium">
                Conocer el Manifiesto ANKA 
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>

            </div>

            {/* 4. ACENTO ÁMBAR (El Pulso de Comunidad) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-DEFAULT/40 to-transparent" />
          </div>

          {/* Elementos Flotantes (UI Decor) */}
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