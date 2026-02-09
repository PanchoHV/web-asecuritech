"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar Scroll para activar el modo "Flotante"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-brand-navy/70 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* 1. LOGO CON GLOW DE MARCA */}
        <Link href="/" className="relative h-10 w-40 md:h-12 md:w-48 group">
          <div className="absolute -inset-2 bg-brand-sky/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-xbqfqjzj8smhyksbb8z7.webp"
            alt="Asecuritech Logo"
            fill
            className="object-contain object-left relative z-10"
          />
        </Link>

        {/* 2. MENÚ ESCRITORIO (Centrado y Elegante) */}
        <div className="hidden md:flex items-center space-x-10">
          {[
            { name: "Soluciones", href: "#soluciones" },
            { name: "Tecnología", href: "#tecnologia" },
            { name: "Partners", href: "#partners" },
            { name: "Nosotros", href: "#nosotros" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-bold tracking-[0.15em] uppercase text-brand-slate hover:text-brand-sky transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-sky transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* 3. ACCIÓN PRINCIPAL (CTA) */}
        <div className="hidden md:block">
          <button className="relative group overflow-hidden px-8 py-2.5 rounded-full border border-brand-teal/30 bg-brand-teal/5 text-white font-black text-[11px] tracking-widest uppercase transition-all duration-300 hover:border-brand-teal hover:bg-brand-teal hover:text-brand-navy">
             <span className="relative z-10 flex items-center gap-2">
               Agendar Demo <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </span>
          </button>
        </div>

        {/* TRIGGER MÓVIL */}
        <button
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-brand-sky"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 4. MENÚ MÓVIL (Full Screen Overlay con Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 h-screen w-full bg-brand-navy/95 backdrop-blur-2xl z-[90] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
               <ShieldCheck className="text-brand-sky" size={32} />
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-slate"><X size={32} /></button>
            </div>

            <div className="flex flex-col space-y-8">
              {["Soluciones", "Tecnología", "Partners", "Nosotros"].map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link 
                    href="#" 
                    className="text-3xl font-black text-white hover:text-brand-sky transition-colors flex items-center justify-between group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link} <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12">
               <button className="w-full py-5 bg-brand-teal text-brand-navy font-black rounded-2xl text-lg shadow-[0_0_20px_rgba(55,186,195,0.3)]">
                 AGENDAR DEMO
               </button>
               <p className="text-center mt-6 text-brand-slate text-xs uppercase tracking-widest font-bold">Asecuritech 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}