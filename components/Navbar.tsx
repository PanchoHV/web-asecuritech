"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar Scroll para cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050A14]/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="relative h-10 w-40">
          <Image
            src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-i4ypfaf74a3pxxpbg6zq.webp"
            alt="Asecuritech Logo"
            fill
            className="object-contain object-left"
          />
        </div>

        {/* MENU ESCRITORIO */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <Link href="#soluciones" className="hover:text-white transition-colors">Soluciones</Link>
          <Link href="#tecnologia" className="hover:text-white transition-colors">Tecnología</Link>
          <Link href="#partners" className="hover:text-white transition-colors">Partners</Link>
          <Link href="#nosotros" className="hover:text-white transition-colors">Nosotros</Link>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button className="px-6 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-[#050A14] transition-all duration-300 font-semibold text-sm">
            Agendar Demo
          </button>
        </div>

        {/* MENU MOVIL TRIGGER */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOVIL DESPLEGABLE */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050A14]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col space-y-4 h-screen">
           <div className="relative h-12 w-12 mb-4 mx-auto">
             <Image 
                src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-rjpu66ts3iopelua4ucr.webp"
                alt="Logo Mobile"
                fill
                className="object-contain"
             />
           </div>
           <Link href="#" className="text-white text-lg text-center py-2 border-b border-white/10">Soluciones</Link>
           <Link href="#" className="text-white text-lg text-center py-2 border-b border-white/10">Tecnología</Link>
           <Link href="#" className="text-white text-lg text-center py-2 border-b border-white/10">Partners</Link>
           <button className="w-full py-3 bg-white text-[#050A14] font-bold rounded-lg mt-4">
             Agendar Demo
           </button>
        </div>
      )}
    </nav>
  );
}