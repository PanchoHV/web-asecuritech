"use client";

import { motion } from "framer-motion";
import { Shield, Users, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#050A14]">
      {/* 1. FONDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-jgngsu4js4ar7nglmc5w.webp"
          alt="Ecosistema Asecuritech"
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* Degradados con color sólido para asegurar visibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-transparent to-[#050A14]" />
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Sincronizamos <br />
            <span className="text-cyan-400">Tecnología</span> y <br />
            <span className="text-amber-500">Comunidad</span> Para Salvar Vidas <br />
          </h1>
          
          <p className="text-xl text-gray-400 max-w-xl mb-12 font-light">
            El primer ecosistema que une Detección, Inteligencia de Datos y Respuesta Operativa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {/* Botón Sentinel */}
            <Link href="/sentinel" className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-500">
              <Shield className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-white mb-2 text-left">Para Organizaciones</h3>
              <p className="text-sm text-gray-500 mb-4 text-left">Sentinel OS: Control operativo y protección de activos de alto valor.</p>
              <div className="flex items-center text-blue-500 font-bold text-sm">
                VER SENTINEL <ChevronRight size={16} />
              </div>
            </Link>

            {/* Botón Zephira */}
            <Link href="/zephira" className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500 transition-all duration-500">
              <Users className="text-amber-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-white mb-2 text-left">Para Familias</h3>
              <p className="text-sm text-gray-500 mb-4 text-left">Zephira App: Seguridad ciudadana y respuesta inmediata en tu mano.</p>
              <div className="flex items-center text-amber-500 font-bold text-sm">
                VER ZEPHIRA <ChevronRight size={16} />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}